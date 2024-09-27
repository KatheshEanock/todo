import axios from "axios";
import { useEffect, useState } from "react";
import { MdDelete, MdModeEdit } from "react-icons/md";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "./ui/table";

function Todo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });
  const [data, setData] = useState([]);
  const [editData , setEditData]=useState<any | null>(null);
  const [editMode , setEditMode]=useState(false);
  useEffect(() => {
      axios.get("http://localhost:8000/users").then((reponse) => {
          setData(reponse.data);
        });
    }, []);
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
  const handleData = (user: any) => {
    setEditMode(true)
      setEditData(user)    
    setFormData({
        name: user.name,
        email: user.email,
        number: user.number,
    })
  };
 
  const submitData = (e: any) => {
    e.preventDefault();
    console.log(formData);
    if(editMode){
        axios.put(`http://localhost:8000/users/${editData?.id}`,formData)
        .then((res)=>{
            console.log("Data updated", res);
          location.reload();
        })
    }else{
        axios.post("http://localhost:8000/users", formData).then((res) => {
            location.reload();
        });
    };
}

 const handleDeleteData=(user:any)=>{
          axios.delete(`http://localhost:8000/users/${user.id}`);
          location.reload()
 }
  return (
    <div className="w-full h-full">
      <div className="p-8">
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>{editMode ? "Edit Info" : "ToDo"}</CardTitle>
            <CardDescription>{editMode ? "Edit Your Info" : "Add Your Info"} </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={submitData}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Name" 
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your mail"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="number">Phone</Label>
                  <Input
                    id="number"
                    type="tel"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    placeholder="Enter Your number"
                  />
                </div>
              </div>
              <CardFooter className="flex justify-center mt-6">
                <Button type="submit">{editMode ? "Update" : "Submit"} </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
      {/* <div >
        <Table >
          <TableCaption> {(data.length===0) ?"No Data Found" : "A list of your recent Data's."}</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-center">Number</TableHead>
              <TableHead className="text-center">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((data: any, index) => {
              return (
                <>
                  <TableRow key={index}>
                    <TableCell className="font-medium">{index + 1}</TableCell>
                    <TableCell>{data.name}</TableCell>
                    <TableCell className="sm:w-auto">{data.email} </TableCell>
                    <TableCell className="text-right"> {data.number}</TableCell>
                    <TableCell className="text-center">
                    <Button onClick={() => handleData(data)}>
                          <MdModeEdit className="text-blue-700" />
                        <span className="hidden  sm:inline-block ml-1 text-blue-600">
                        Edit
                        </span>
                      </Button>                      
                      <Button className="text-red-500" onClick={() => handleDeleteData(data)}>
                          <MdDelete className="text-red-700" />
                        <span className="hidden sm:inline-block ml-1">
                        delete
                        </span>
                      </Button>
                    </TableCell>
                  </TableRow>
                </>
              );
            })}
          </TableBody>
        </Table>
      </div> */}
    </div>
  );
}

export default Todo;
