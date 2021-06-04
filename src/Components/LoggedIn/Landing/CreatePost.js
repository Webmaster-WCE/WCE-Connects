import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 340,
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = useState('');
  const [target, setTarget] = useState('');
  const [targetBranch, setTargetBranch] = useState('');
  const [selectedFile, setSelectedFile] = useState()
  const [preview, setPreview] = useState()

  // create a preview as a side effect, whenever selected file is changed
  useEffect(() => {
      if (!selectedFile) {
          setPreview(undefined)
          return
      }

      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = e => {
      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile(undefined)
          return
      }

      // I've kept this example simple by using the first image instead of multiple
      setSelectedFile(e.target.files[0])
  }

  const targetChange = (event) => {
    setTarget(event.target.value);
  };
  const targetBranchChange = (event) => {
    setTargetBranch(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleSubmit = () => {

  };
  const handleReset = () => {
    setValue('');
    setSelectedFile('');
  };

  return (
    <form className={classes.root}>
        <TextField
            id="filled-multiline-static"
            label="Type your text here..."
            multiline
            rows={4}
            variant="filled"
            style={{marginTop: "20px"}}
            value={value}
            onChange={handleChange}
        />
        <FormControl className={classes.formControl} style={{width:"50ch"}}>
            <InputLabel id="demo-simple-select-autowidth-label" >Select Target Branch</InputLabel>
            <NativeSelect
            value={targetBranch}
            onChange={targetBranchChange}
            >
                <option value="all">All</option>
                <option value="cse">Computer Science and Engineering</option>
                <option value="it">Information Technology</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="civil">Civil Engineering</option>
                <option value="electrical">Electrical Engineering</option>
                <option value="electronics">Electronics Engineering</option>
            </NativeSelect>
        </FormControl>
        <FormControl className={classes.formControl} style={{width:"50ch"}}>
            <InputLabel id="demo-simple-select-autowidth-label" >Select Target Audience</InputLabel>
            <NativeSelect
            value={target}
            onChange={targetChange}
            >
            <option value="all">All</option>
            <option value="alumni-only">Alumni Only</option>
            <option value="teachers-only">Teachers Only</option>
            <optgroup label="Students Only">
                <option value="all-students">All Students</option>
                <option value="fy-students">First Year Students</option>
                <option value="sy-students">Second Year Students</option>
                <option value="ty-students">Third Year Students</option>
                <option value="ly-students">Last Year Students</option>
            </optgroup>
            </NativeSelect>
        </FormControl> <br/>
        <input type="file" id="img" name="img" accept="image/*" style={{display:"none"}} onChange={onSelectFile}/>
        {selectedFile &&  <img src={preview} alt="postid" style={{maxWidth:"50ch", margin:"20px"}}/> }
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"15px"}}>
          <label htmlFor="img">
              <AddAPhotoIcon style={{ marginLeft:"20px",padding:"10px", display:"flex", position:"flex-start", cursor:"pointer"}}/>
          </label>
          <div style={{marginRight:"30px"}}>
            <input type="reset" value="Cancel" onClick={handleReset}/>
            <input type="submit" value="Post" onClick={handleSubmit} style={{marginLeft:"10px"}}/>
          </div>
        </div>
    </form>
  );
}
