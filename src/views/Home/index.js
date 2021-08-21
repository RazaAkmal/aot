import React from 'react'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Header from '../../common/component/Header';
import Footer from '../../common/component/Footer';
import './style.css';


const Home = () => {
  return (
    <div className="home">
      <Header />
      <Container maxWidth="lg" className="home-contant">
        <Grid className="row" container spacing={8}>
          <Grid item xs={12} sm={6}>
            <div>
              <Typography variant="h2" className="title" >
                We ve got an Ace For that.
              </Typography>
              <div className="search-input" >
                <TextField 
                  id="outlined-basic" 
                  variant="outlined" 
                  placeholder="Help me with ...(topic)"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                   />
              </div>
              <Button component={Link} to="advance_search" className="advanc-btn">Advanced Search</Button>
              <div className="topic-list">
                <Typography variant="p">
                  We ve got an Ace For that.We ve got an Ace For that.
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="intro-viode">
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  )
}

export default Home
