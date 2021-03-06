import React from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
import {Link} from 'react-router-dom';

export default function Header() {
    return (
        <div>
            <Navbar style={{height: '35px'}} color="dark" dark expand="md">
            <Nav navbar>
            {/*<div className="col-lg-8">*/}
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About us
                </DropdownToggle>
                <DropdownMenu left>
                  <DropdownItem tag={Link} to="/aboutus/newsletters">
                    Newsletter
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/aboutus/financials">
                    Finanicals
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/aboutus/branches">
                    Branches
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/aboutus/press">
                    Press Reviews
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/aboutus/history">
                    History
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/aboutus/views">
                    Vision
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Campaigns
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/campaigns">
                    Branch 1
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/campaigns">
                    Branch 2
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Events
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/events/upcoming">
                    Upcoming Events
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/events/past">
                    Past Events
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Contribute
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem tag={Link} to="/contribute/donate">
                    Donate
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contribute/volunteer">
                    Volunteer
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contribute/handin">
                    Hand In Donations
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contribute/help">
                    Ask For Help
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink tag={Link} to="/blog">Blog</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contactus">Contact us</NavLink>
              </NavItem>
              {/*</div>
              <div className="col-lg-4">*/}
              {/* <NavItem>
                <NavLink tag={Link} to="#">Register</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="#">Log In</NavLink>
              </NavItem> */}
              {/*</div>*/}
              <NavItem>
                <NavLink className="ml-auto" tag={Link} to="/admin">Admin</NavLink>
              </NavItem>
            </Nav>
        </Navbar>
        </div>
    )
}
