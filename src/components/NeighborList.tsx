import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Neighbor } from 'types';

interface BorderListProps {
  neighbors: Neighbor[];
}
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      alignSelf: 'center',
    },
    list: {
      listStyle: 'none',
      paddingLeft: 0,
    },
    borderCountry: {
      justifyContent: 'center',
      paddingTop: '12px',
      paddingBottom: '12px',
    },
  }),
);

export const NeighborList: FC<BorderListProps> = ({ neighbors = [] }) => {
  const classes = useStyles();
  return (
    <>
      {neighbors.length ? (
        <Grid container component="ul" className={classes.list} spacing={2}>
          {neighbors.map((neighbor) => (
            <Grid item xs={12} sm={4} key={neighbor.name} className={classes.container}>
              <Link
                underline="none"
                component={RouterLink}
                to={{
                  pathname: neighbor.slug,
                  state: neighbor.name,
                }}
              >
                <Card>
                  <CardActionArea>
                    <Paper>
                      <ListItem className={classes.borderCountry}>
                        <Typography variant="subtitle1" component="span">
                          {neighbor.name}
                        </Typography>
                      </ListItem>
                    </Paper>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography>This country has no neighbours :(</Typography>
      )}
    </>
  );
};
