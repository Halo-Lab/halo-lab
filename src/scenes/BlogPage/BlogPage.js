import React from "react";
import classNames from "classnames";

import Previews from "./components/Previews";
import GradientText from "../../components/GradientText";
import styles from "./BlogPage.module.scss";
import PropTypes from "prop-types";

const BlogPage = (props) => {
  const pageWrapperClass = classNames(styles.container, 'pageWrapper');
  return (
    <div className={pageWrapperClass}>
      <h1 className={styles.title}>
        <GradientText text="Our Blog" />
      </h1>
      <Previews page={props.page}/>
    </div>
  );
};
BlogPage.propTypes = {
  page: PropTypes.number,
};
export default BlogPage;
