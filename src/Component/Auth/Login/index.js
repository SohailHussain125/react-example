import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import { useState } from 'react';
import './index.scss'
import axios from 'axios'
const Login = ({ setIsLoginScreen }) => {

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const login = () => {
        axios.post("http://localhost:4000/users/authenticate", state)
            .then(res => console.log(res)
            )
            .catch(err => console.log(err, ">>>"))
    }
    onchange = (e) => e.target.name && setState({ ...state, [e.target.name]: e.target.value });

    return (
        <Row className="login-container">
            <Col span={10} className="login-col">
                <h2>Login Form</h2>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                >
                    <Form.Item
                        label="username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input name="username" type="text" onChange={(e) => console.log(e.target.name, e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password name="password" />
                    </Form.Item>

                    <Form.Item onClick={()=>setIsLoginScreen(false)} style={{ color: "#1890ff", cursor: "pointer" }} wrapperCol={{ offset: 8, span: 16 }}>
                        don't have an account?
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" onClick={login}>
                            Submit
        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );

}
export default Login;
