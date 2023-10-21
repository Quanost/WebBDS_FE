import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import success from "../../asert/images/success.png";
import loading from "../../asert/images/loading.png";
import styles from "./styles.module.css";



const EmailVerify = () => {

    const [validUrl, setValidUrl] = useState(true);
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:8000/api/auth/verify/${param.id}/${param.token}`;
				const { data } = await axios.get(url);
				console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);

	return (
		<>
			{validUrl ? (
				<div className={styles.container}>
					<img src={loading} alt="success_img" className={styles.success_img} />
					<h1> Đang xác nhận email</h1>
					
				</div>
			) : (
				
				<div className={styles.container}>
					<img src={success} alt="success_img" className={styles.success_img} />
					<h1>Xác nhận Email thành công</h1>
					<Link to="/signin">
						<button className={styles.green_btn}>Login</button>
					</Link>
				</div>
			)}
		</>
	);

}

export default EmailVerify;