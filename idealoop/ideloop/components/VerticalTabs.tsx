import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';
import { Prisma, User } from '@prisma/client';
import internal from 'stream';
import { useEffect, useState } from 'react';
import { fetcher } from '../utils/fetcher';
import router from 'next/router';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface Question {
  id?: number;
  title: string;
  description: string;
  userId: User['id'];
}
interface Answer {
  title: string;
  description: string;
  userId: User['id'];
  question: Question['id'];
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {

  const[user, setUser] = useState([])

    const fecthUser = async () => {
        const body: Prisma.UserWhereInput={
            email: window.localStorage.getItem('user'),
        };
        try {
          console.log(body)
          const userDetails = await fetcher("/api/getUser", {user: body})
          setUser(userDetails);
          
          
        } catch (err) {
          console.log(err);
        }
      }
      useEffect(() => {
          fecthUser();
      },[]);
  const [values, setValues] = React.useState<Question>({
    title: '',
    description: '',
    userId: user['id'],
    
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = "";
    body:{
      values
  };
    try {
      await fetcher("/api/create", {question: body})
      router.replace('login');
    } catch (err) {
      console.log(err.response.data);
    }
  }
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "100vh" }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Forum" {...a11yProps(0)} />
        <Tab label="Kata" {...a11yProps(1)} />
        <Tab label="Daily Motivation" {...a11yProps(2)} />
        <Tab label="Articles" {...a11yProps(3)} />
        <Tab label="Jobs" {...a11yProps(4)} />
        <Tab label="Meetings" {...a11yProps(5)} />
        {/* <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
       <TabPanel value={value} index={0}>
       <FormControl fullWidth sx={{ m: 1 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            // value={values.amount}
            onChange={handleSubmit()}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </TabPanel> 
     
    </Box>
  );
}