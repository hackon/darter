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

const rows = ['15', '16', '17', '18', '19', '20', 'B'];

const CricketScore = ({players, score, currentPlayer}) => (
  <Table selectable={false} fixedHeader={true} height={'340px'} multiSelectable={false}>
    <TableHeader adjustForCheckbox={false} displaySelectAll={false} enableSelectAll={false}>
      <TableRow>
        <TableHeaderColumn>X</TableHeaderColumn>
        {players.map((p, i) => (
          <TableHeaderColumn key={i}>{currentPlayer === p ? <b>{p}</b> : {p}}</TableHeaderColumn>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody displayRowCheckbox={false}>
      {rows.map((r, i) => (
        <TableRow key={i}>
          <TableRowColumn>{r}</TableRowColumn>
          {players.map((p,pi) => (
            <TableRowColumn>{score[pi][r]}</TableRowColumn>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

CricketScore.propTypes = {
  players: PropTypes.array.isRequired,
  score: PropTypes.array.isRequired,
  currentPlayer: PropTypes.string.isRequired,
};

export default CricketScore;