import RegisterPage from "./Register";
export default async function Register() {
    const res = await fetch('https://localhost:44391/api/Authentication/GetRoles');
    const roles = await res.json();
    return (
        <>
            <RegisterPage
                roles={roles}
            />
        </>
    )
}








// 'use client'
// import { useState } from "react";
// import Link from "next/link";

// export default function RegisterPage({ roles }: any) {
//     const [role, setRole] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [userName, setUserName] = useState("");
//     const [error, setError] = useState("");
//     const [selectedFile, setSelectedFile] = useState('');

//     async function handleSubmit(e: any) {
//         e.preventDefault();

//         if (!selectedFile) {
//             setError("Please select an image");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("Role", role);
//         formData.append("Email", email);
//         formData.append("Password", password);
//         formData.append("UserName", userName);
//         try {
//             const response = await fetch("/api/register", {
//                 method: "POST",
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: formData,
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 // Handle the successful registration
//             } else {
//                 setError("Something went wrong");
//             }
//         } catch (error) {
//             setError("Something went wrong");
//         }
//     }


//     return (
//         <div className="container vh-100 row items-center m-auto justify-center">
//             <form className="col-lg-4" onSubmit={handleSubmit} method="post">
//                 <div className="mb-2">
//                     <label htmlFor="roli">Cakto Rolin</label>
//                     <select
//                         id="roli"
//                         onChange={(e) => setRole(e.currentTarget.value)}
//                         className="form-select"
//                     >
//                         <option value="0">--zgjedh rolin e perdoruseit--</option>
//                         {roles.map((role: any) => (
//                             <option key={role.id} value={role.name}>
//                                 {role.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//                 <div className="mb-2">
//                     <label htmlFor="Picture">Picture</label>
//                     <input
//                         type="file"
//                         id="Picture"
//                         className="form-control"
//                         onChange={({ target }) => {
//                             if (target.files) {
//                                 setSelectedFile(target.files[0])
//                             }
//                         }}
//                     />
//                 </div>
//                 <div className="mb-2">
//                     <label htmlFor="userName">userName</label>
//                     <input
//                         type="text"
//                         id="userName"
//                         className="form-control"
//                         onChange={(e) => setUserName(e.currentTarget.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="form-control"
//                         onChange={(e) => setEmail(e.currentTarget.value)}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         className="form-control"
//                         onChange={(e) => setPassword(e.currentTarget.value)}
//                     />
//                     <p className="text-red-700">{error}</p>
//                 </div>

//                 <div className="btn-wrapper ">
//                     <input
//                         type="submit"
//                         className="btn btn-primary w-100"
//                         value="Register"
//                     />
//                 </div>
//                 <p>
//                     Already have an account? <Link href="/login">Login</Link>
//                 </p>
//             </form>
//         </div>
//     );
// }
