import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import API from '../services/Api'
import Loading from './Loading'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '200px',
    },
  }),
);

const Content = () => {
  const classes = useStyles()
  const [searchInput, setSearchInput] = useState<string>('')
  const [repositories, setRepositories] = useState<any | null>([])
  const [loading, setLoading] = useState<boolean>(false)

  const submit = async () => {
    setLoading(true)
    await API.get(`/repositories?q=${searchInput}+in:name&sort=name&order=asc&per_page=15`)
    .then(res => setRepositories(res.data.items))
    .catch(() => setRepositories(null))
    setLoading(false)
  }

  return (
		<div className="content">
      {loading ? 
        <Loading />
      : 
        <div>
          <div className="content-form">
            <TextField
              label="Repository Name"
              className={classes.textField}
              variant="filled"
              value={searchInput}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInput(event.target.value as string)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  submit()
                }
              }}
            />
            <IconButton aria-label="Search" onClick={submit}>
              <SearchIcon fontSize="large" />
            </IconButton>
          </div>

          <div className="items-list">
              {repositories && repositories?.length > 0 ? 
                <div className="list">
                  {repositories?.map((repository: { id: number; html_url: string; name: string; description: string | null; language: string | null; license: string | null }) => {
                    return (
                      <div className="item" key={repository.id}>
                        <a href={repository.html_url} className="name">{repository.name}</a>
                        <span className="description">{repository.description}</span>
                        <span className="language">{repository.language}</span>
                      </div>
                    )
                  })}
                </div>
              :
                <span className="error-msg">Nothing to list.</span>
              }
          </div>
        </div>
      }
    </div>
	);
}

export default Content;
