import React, { Component } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { connect } from "react-redux";
import { styled } from '@mui/material/styles';
import {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
} from "../slices/tutorials";
import { Link } from "react-router-dom";

class QuizList extends Component {

  componentDidMount() {
    this.props.retrieveQuizzes();
  }

  render() {
    const { quizzes } = this.props;
    const Img = styled('img')({
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    });

    return (
      <div className="content-body">
        <div class="container-fluid">
          <Paper
            sx={{
              p: 2,
              margin: 'auto',
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
          >
            {quizzes.map((quiz) => (
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 128, height: 128 }}>
                    <Img alt="complex" src="/images/card/2.png" />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography gutterBottom variant="subtitle1" component="div">
                        Question: {quiz.question}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        Options: {quiz.options.join(", ")}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Answer: {quiz.answer}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ cursor: 'pointer' }} variant="body2">
                        <Link to={`/quiz/${quiz.id}`} className="dropdown-item ai-icon">
                          Open
                        </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Paper>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quizzes: state.quizzes,
  };
};

export default connect(mapStateToProps, {
  retrieveTutorials,
  findTutorialsByTitle,
  deleteAllTutorials,
})(QuizList);
