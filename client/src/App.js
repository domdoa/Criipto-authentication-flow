import React, { useState, useEffect } from "react";
import "./App.css";
import authService from "./services/auth";

function App() {
	const [user, setUser] = useState();
	const [info, setInfo] = useState([]);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		authService
			.getUser()
			.then(res => {
				setUser(res);
				convertToArr(res._json);
			})
			.catch(err => {
				console.log(err);
			});
	}, [refresh]);

	const convertToArr = obj => {
		let arr = [];
		Object.entries(obj).forEach(([key, value]) => arr.push(`${key}: ${value}`));
		setInfo(arr);
	};

	const handleClick = e => {
		window.location = `http://localhost:5000/auth/criipto/${e.target.id}`;
	};

	const logout = () => {
		authService
			.logout()
			.then(() => {
				setRefresh(true);
			})
			.catch(err => {
				console.log(err);
			});
	};

	return (
		<div className="container">
			<div className="row">
				{user ? (
					<div className="col-sm-9 col-md-7 col-lg-8 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Welcome</h5>
								<h5 className="card-title text-center">{user.displayName}</h5>
								<table className="table table-striped">
									<tbody>
										{info.map(i => {
											const tr = i.split(/:(.*)/);
											return (
												<tr>
													<td>{tr[0]}</td>
													<td>{tr[1]}</td>
												</tr>
											);
										})}
									</tbody>
								</table>
								<button
									className="btn btn-sm btn-danger btn-block"
									onClick={logout}
								>
									Logout
								</button>
							</div>
						</div>
					</div>
				) : (
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card card-signin my-5">
							<div className="card-body">
								<h5 className="card-title text-center">Sign in using:</h5>
								<button
									className="btn btn-lg btn-info btn-block"
									id="nemid"
									onClick={e => handleClick(e)}
								>
									DK NemID
								</button>
								<button
									className="btn btn-lg btn-info btn-block"
									id="nor"
									onClick={e => handleClick(e)}
								>
									Norwegian BankID
								</button>
								<button
									className="btn btn-lg btn-info btn-block"
									id="fin"
									onClick={e => handleClick(e)}
								>
									Finnish BankID
								</button>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default App;
