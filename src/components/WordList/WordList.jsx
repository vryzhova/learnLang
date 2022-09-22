// import style from './wordList.css'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import { useState, useEffect } from 'react';
import style from './wordList.scss'
// import style from '../App.css';
import * as React from 'react';
import {IconButton,Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper} from '@mui/material';
import { Grid } from  'react-loader-spinner'


function BasicTable() {
    const [words, setWords] = useState([]);
    const [edit,setEdit] = useState(false);
    const [isLoading,setIsLoading] = useState(false)
    useEffect(() => {
        fetch("http://itgirlschool.justmakeit.ru/api/words").then(res => {
            setIsLoading(true)
            if(res.ok) {
                setIsLoading(false)
                return res.json()
                
            } else {
                throw new Error('Error')
            }
        }).then(data => {
        setWords(data);
        })
    },[])
    const removeItem = (wordId) => {
        setWords(words.filter(word => word.id !== wordId))
    }
    const editItem = (wordId) => {
        setEdit(prevState => !prevState)
    }
    const saveItem = (wordId) => {
        console.log(words.find(word => word.id === wordId))
        
        setEdit(false)
    }
    return (
        <div className={style.tableContainer}>

            {
                isLoading? <Grid
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                /> : <TableContainer component={Paper} sx={{maxWidth: 800, height:600}}>
                <Table  stickyHeader aria-label="sticky table" sx={{ minWidth: 150 }} size="small" >
                <TableHead>
                    <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell align="right">Word Theme</TableCell>
                    <TableCell align="right">English&nbsp;</TableCell>
                    <TableCell align="right">Russian&nbsp;</TableCell>
                    <TableCell align="right">Edit&nbsp;</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {words.map((word) => (
                    <TableRow 
                        key={word.id}>
                        <TableCell component="th" scope="row">
                        {word.id}
                        </TableCell>
                        <TableCell align="right">{edit? <input type='text' defaultValue={word.tags} onChange={(e)=>{
                            console.log(e.target.value)
                        }}></input>:word.tags}</TableCell>
                        <TableCell align="right">{edit? <input type='text' defaultValue={word.english}></input>:word.english}</TableCell>
                        <TableCell align="right">{edit?<input type='text' defaultValue={word.russian}></input>:word.russian}</TableCell>
                        <TableCell align="right">
                        <IconButton aria-label="delete" onClick={()=>removeItem(word.id)}>
                            <DeleteIcon /> 
                        </IconButton> 
                            <IconButton aria-label="edit" onClick={()=>editItem(word.id)}>
                                <EditIcon />
                            </IconButton> 
                            {
                            edit? <IconButton onClick={()=>saveItem(word.id)}><CheckIcon/></IconButton>:<IconButton disabled={true}><CheckIcon/></IconButton>}
                        </TableCell>
                        
                    </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            }
                
        
        </div>
    
    );
}

// const WordList = (props) => {
    

//     return(
//         <div className={style.wordlist}>
//             <div className={style.id}> {props.id}</div>
//             <div className={style.wordTheme}>{props.tags}</div>
//             <div className={style.english}>{props.english}</div>
//             <div className={style.russian}>{props.russian}</div>
//             <div className={style.edit}>
                
//                     <IconButton aria-label="delete">
//                         <DeleteIcon />
//                     </IconButton> 
//                     <IconButton aria-label="delete">
//                         <EditIcon />
//                     </IconButton> 
                
//             </div>
//         </div>
//     )
// }

export default BasicTable