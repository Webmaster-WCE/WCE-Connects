import React from "react";
import { useForm } from "react-hook-form";

function AdminPanel() {
  const { register, handleSubmit } = useForm()
  const onSubmit = async (data) => {
  const formData = new FormData()
  formData.append("uploadedFile", data.uploadedFile[0])
  console.log(data.uploadedFile[0])
  const res = await fetch("http://localhost:5000/admin/upload", {
      method: "POST",
      file: formData
    }).then(res => res.json()).catch(res => res)
    alert(JSON.stringify(res))
  }
  return (
    //   <div>hello</div>
    <div style={{paddingTop:"70px"}}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>
            <p>Upload Excel File to Create Accounts</p>
            <input {...register('uploadedFile', { required: true })} type="file" accept=".csv, .xlsx" name="uploadedFile" />
        </label>
        <button>Submit</button>
        </form>
    </div>
  );
}

export default AdminPanel;