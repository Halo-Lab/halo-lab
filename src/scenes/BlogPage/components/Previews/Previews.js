import React, { Fragment } from "react";

import Switcher from "./components/Switcher";
import { useWordpressPosts } from "@hooks/queries";
import PropTypes from "prop-types";

const Previews = (props) => {
  const items = useWordpressPosts();

  return (
    <Fragment>
      <Switcher items={items} page={props.page}/>
    </Fragment>
  );
};
Previews.propTypes = {
  page: PropTypes.number,
};
export default Previews;
