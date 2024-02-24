import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");


	const handleSubmit = async (e) => {
		e.preventDefault();
	};

	return (
		<div className='flex flex-col h-full items-center justify-center min-w-200 mx-auto'>
			<div className='w-[500px]  p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-white'>
					Login
					<span className='text-blue-500'> Enetworks</span>
				</h1>

				<form onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-white label-text'>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-white label-text'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<Link to='/signup' className='text-sm text-white hover:underline hover:text-blue-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</Link>

					<div className="mt-5">
						<Link to={"/home"}><button className="btn btn-block">Login</button></Link>
					</div>
				</form>
			</div>
		</div>
	);
};
export default Login;
