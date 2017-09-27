import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { lightBlueA100 } from 'material-ui/styles/colors';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    padding: '10vw',
    overflowY: 'auto',
  },
  gridItem: {
    height: '15vw',
    width: '15vw',
    margin: '2.5vw',
    backgroundColor: 'lightgray',
  },
};

const tilesData = [];
for (let i = 0; i < 20; i += 1) {
  tilesData.push({
    id: i,
    title: 'Stock Car',
    author: 'Unscratch',
  });
}

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Grid = () => (
  <div style={styles.root}>
    <GridList
      cellHeight="auto"
      cols={4}
      style={styles.gridList}
    >
      {
        tilesData.map(tile => (
          <GridTile
            key={tile.id}
            title={tile.title}
            subtitle={<span>by <b>{tile.author}</b></span>}
            actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
            titleBackground={lightBlueA100}
            style={styles.gridItem}
          />
        ))
      }
    </GridList>
  </div>
);

export default Grid;
