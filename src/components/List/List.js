import React from 'react';
import styles from './List.scss';

import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';

import Creator from '../Creator/Creator.js';
import Column from '../Column/ColumnContainer.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.node
  };
  static defaultProps = {
    description: settings.defaultListDescription
  };

  render() {
    const { title, image, description, columns } = this.props;

    return (
      <section className={styles.component}>
        <Hero titleText={title} image={image} />
        <div className={styles.description}>{ReactHtmlParser(description)}</div>
        <div className={styles.columns}>
          {columns.map(columnData => (
            <Column key={columnData.id} {...columnData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={title => this.addColumn(title)}
          />
        </div>
      </section>
    );
  }
}
export default List;
