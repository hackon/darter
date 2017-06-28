import React from 'react';
import PropTypes from 'prop-types';
import ContentSend from 'material-ui/svg-icons/content/send';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const Score = ({players, score, currentPlayer}) => (
  <Table selectable={false} fixedHeader={true} height={'150px'} multiSelectable={false}>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn>-</TableHeaderColumn>
        <TableHeaderColumn>Player</TableHeaderColumn>
        <TableHeaderColumn>Score</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {players.map((player, index) => (
        <TableRow key={index}>
          <TableRowColumn>{currentPlayer === player && <ContentSend/>}</TableRowColumn>
          <TableRowColumn>{player}</TableRowColumn>
          <TableRowColumn>{score[index]}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

Score.propTypes = {
  players: PropTypes.array.isRequired,
  score: PropTypes.array.isRequired,
  currentPlayer: PropTypes.string.isRequired,
};

export default Score;