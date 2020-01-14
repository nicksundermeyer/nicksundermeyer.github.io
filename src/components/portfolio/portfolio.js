import React, { Component } from "react";
import Modal from "./portfolio-modal";
import portfolioData from "../../portfolioData";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { FormControl, withStyles } from "@material-ui/core";
import "./portfolio.css";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
});

class Portfolio extends Component {
  state = {
    category: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Examples of My Work</h1>
            <form className={classes.root} autoComplete="off">
              <FormControl className={classes.formControl}>
                {/* <InputLabel htmlFor="age-simple">Filter</InputLabel> */}
                <Select
                  value={this.state.category}
                  onChange={this.handleChange}
                  inputProps={{ name: "category", id: "age-simple" }}
                >
                  <MenuItem value="">
                    <em>Filter</em>
                  </MenuItem>
                  <MenuItem value={"Game Development"}>
                    Game Development
                  </MenuItem>
                  <MenuItem value={"Graphic Design"}>Graphic Design</MenuItem>
                  <MenuItem value={"3D Work"}>3D Work</MenuItem>
                  <MenuItem value={"Web Development"}>Web Development</MenuItem>
                </Select>
              </FormControl>
            </form>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolioData.map((e, i) => {
                if (this.state.category === "") {
                  return <Modal portfolioData={portfolioData[i]} modalID={i} />;
                } else if (
                  portfolioData[i].categories === this.state.category
                ) {
                  return <Modal portfolioData={portfolioData[i]} modalID={i} />;
                } else {
                  return null;
                }
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Portfolio);
