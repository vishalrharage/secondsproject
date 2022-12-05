import React from "react";

import SolidButton from "./SolidButton";
import classes from "./Header.module.css";
import PlusIcon from "../../assets/PlusIcon";
import HollowButton from "./HollowButton";
import InputField from "./InputField";

const Header = (props) => {
  return (
    <>
      <header>
        <img />
        <input placeholder="Search Location" />
        <div >
          <InputField className={classes.search_for_anything} type="text" placeholder="Search for anything"/>
        </div>
        <div className={classes.sign_in_sign_up}>
          <HollowButton>Sign in/Sign up</HollowButton>
        </div>
        <div className={classes.create_ad}>
          <SolidButton type="button" startAdornment={<PlusIcon />}>
            Create Ad
          </SolidButton>
        </div>
      </header>
    </>
  );
};

export default Header;
