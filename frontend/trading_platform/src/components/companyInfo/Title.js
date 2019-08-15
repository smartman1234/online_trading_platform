import React from "react";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import { getQuote } from "../../redux/actions/iexAction";
import Trade from "../portfolio/Trade";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { currencyFormat } from "../../redux/utility";

class Title extends React.Component {
  state = {
    openTrade: false
  };

  componentDidMount() {
    this.getQuote(this.props.multi);
  }

  componentDidUpdate(prevProps, prevState) {
    const { multi, quote } = this.props;
    if (multi !== null) {
      setTimeout(() => {
        if (multi[0] !== undefined)
          if (quote !== prevProps.quote) this.props.getQuote(multi[0].value);
      }, 3000);
    }
  }

  getQuote(symbol) {
    if (symbol[0] !== undefined) this.props.getQuote(symbol[0].value);
  }

  handleClickOpenTrade = () => {
    this.setState({ openTrade: true });
  };

  closeDialog = () => {
    this.setState({
      openTrade: false
    });
  };

  render() {
    const { multi, quote, isAuthenticated, funds } = this.props;
    const isPositive = Math.sign(quote.changePercent);
    return (
      <div style={{ paddingLeft: 10, paddingTop: 10 }}>
        <React.Fragment>
          <Grid container spacing={8}>
            <Grid item>
              <Typography component="div" variant="h5">
                {multi !== null && multi !== undefined && multi[0] !== undefined
                  ? multi[0].name
                  : ""}
                {isAuthenticated && funds !== null ? (
                  <>
                    <Button color="primary" onClick={this.handleClickOpenTrade}>
                      Trade
                    </Button>
                    <Dialog
                      open={this.state.openTrade}
                      onClose={this.closeDialog}
                      aria-labelledby="form-dialog-title"
                    >
                      <Trade clickSubmit={this.closeDialog} />
                    </Dialog>
                  </>
                ) : (
                  ""
                )}
              </Typography>
            </Grid>
          </Grid>
          {Object.keys(quote).length !== 0 ? (
            <Grid container spacing={40}>
              <Grid item>
                <Typography component="div" variant="body1">
                  <span>
                    Latest Price:{" "}
                    <span style={{ color: "green" }}>
                      {quote.latestPrice !== null
                        ? quote.latestPrice.toFixed(2)
                        : ""}
                    </span>
                  </span>
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="div" variant="body1">
                  <span>
                    Change:{" "}
                    <span
                      style={
                        isPositive === 1 ? { color: "green" } : { color: "red" }
                      }
                    >
                      {quote.change}
                    </span>{" "}
                    (
                    <span
                      style={
                        isPositive === 1 ? { color: "green" } : { color: "red" }
                      }
                    >
                      {(quote.changePercent * 100).toFixed(2)}%
                    </span>
                    )
                  </span>
                </Typography>
              </Grid>
              {isAuthenticated && funds !== null && funds[0] !== undefined ? (
                <>
                  <Grid item>
                    <Typography component="div" variant="body1">
                      <span>Current Cash: </span>
                      <span>
                        {funds[funds.length - 1].totalFund === null
                          ? 0
                          : currencyFormat(funds[funds.length - 1].totalFund)}
                      </span>
                    </Typography>
                  </Grid>
                </>
              ) : (
                ""
              )}
            </Grid>
          ) : (
            <div>loading...</div>
          )}
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    multi: state.searchReducer.multi,
    quote: state.iexReducer.quote,
    funds: state.fundsReducer.funds
  };
};

const mapDispatchToProps = {
  getQuote
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Title);