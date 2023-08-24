import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";


export default function NestedList() {


//For 1st list
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked([checked[0], event.target.checked]);
  };

  const [checked1, setChecked2] = React.useState([true, false, false]);


  //For second list
  const handleChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, event.target.checked,event.target.checked]);
  };

  const handleChange5 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([event.target.checked, checked1[1],checked1[2]]);
  };

  const handleChange6 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked1[0], event.target.checked,checked1[2]]);

    
  };
  const handleChange7 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked2([checked1[0], checked1[1],event.target.checked]);
  };

  //For expand and collapse
  const [open, setOpen] = React.useState(true); //for 1st collpase

  const handleClick = () => {
    setOpen(!open);
  };
  //for 2nd collapse
  const [open1, setOpen1] = React.useState(true); //for 1st collpase

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick}>
          <FormControlLabel
            label="Customer Service"
            control={
              <Checkbox
                checked={checked[0] && checked[1]}
                onChange={handleChange1}
              />
            }
          />

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="Support"
                  control={
                    <Checkbox checked={checked[0]} onChange={handleChange2} />
                  }
                />
                <FormControlLabel
                  label="Customer Success"
                  control={
                    <Checkbox checked={checked[1]} onChange={handleChange3} />
                  }
                />
              </Box>
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Nested List Items
          </ListSubheader>
        }
      >
        <ListItemButton onClick={handleClick1}>
          <FormControlLabel
            label="Design"
            control={
              <Checkbox
                checked={checked1[0] && checked1[1] && checked1[2]}
                onChange={handleChange4}
              />
            }
          />

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <Box sx={{ display: "flex", flexDirection: "column", ml: 3 }}>
                <FormControlLabel
                  label="Product Design"
                  control={
                    <Checkbox checked={checked1[0]} onChange={handleChange5} />
                  }
                />
                <FormControlLabel
                  label="Graphic design"
                  control={
                    <Checkbox checked={checked1[1]} onChange={handleChange6} />
                  }
                />
                 <FormControlLabel
                  label="Web design"
                  control={
                    <Checkbox checked={checked1[2]} onChange={handleChange7} />
                  }
                />
              </Box>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
}
