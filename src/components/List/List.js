import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero.js";
import propTypes from "prop-types";

class List extends React.Component {
  static propTypes = {
    title: propTypes.node.isRequired,
    children: propTypes.node.isRequired,
    imgUrl: propTypes.node.isRequired
  };
  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  };
  render() {
    return (
      <section className={styles.component}>
        <Hero urls={this.props.imgUrl} titleText={this.props.title}></Hero>
        <div className={styles.description}>{this.props.children}</div>
      </section>
    );
  }
}

export default List;
