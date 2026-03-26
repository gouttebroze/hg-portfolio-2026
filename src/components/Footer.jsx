//import Container from "@mui/material/Container";
//import StyledToolbar  from "./AppAppBar";
import Box from '@mui/material/Box';
import { Outlet, Link } from "react-router";


export function Footer() {
  return (
    <footer>
      <p>© 2026 Conception & développement: Hugues Gouttebroze(développeur React & musicien).</p>
      <p><h3>Merci pour la visite ❤️</h3></p>

          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
            {/* <Sitemark /> */}
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <nav>
                <ul className='navbar__wrapper'  direction="row" spacing={2}>
                  <li>
                      <Link to="/">GitLab</Link>
                  </li>
                  <li>
                      <Link to="/">GitHub</Link>
                  </li>
                  <li>
                      <Link to="/">Home</Link>
                  </li>
                  <li>
                      <Link to="/about">About</Link>
                  </li>
                  <li>
                      <Link to="/projects">Projects</Link>
                  </li>
                  <li>
                      <Link to="/formation">Formation</Link>
                  </li>
                  <li>
                      <Link to="/skills">Soft, hard & Mad Skills</Link>
                  </li>
                  <li>
                      <Link to="/contact">Contact</Link>
                  </li>
                    <li>
                      <Link to="/">Linkedin</Link>
                    </li>
                  </ul>
          </nav>         

      <Outlet />
      </Box>
          </Box>
    </footer>
  )
}