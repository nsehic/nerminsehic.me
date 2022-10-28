import React from "react";
import { styled } from "@stitches/react";
import { NavigationDocument } from "../../../.slicemachine/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from '../../../slices';

interface Props {
    data: NavigationDocument<string>;
}

const Nav = styled("nav", {
  all: "unset",
  borderBottom: "1px solid #242424",
  display: "flex",
  height: 52,
  justifyContent: "space-between",
  alignItems: "center",
});

const Navbar: React.FC<Props> = ({ data: nav }) => {
  return (
    <Nav>
        <SliceZone slices={nav.data.slices} components={components} />
    </Nav>
  );
};

export default Navbar;
