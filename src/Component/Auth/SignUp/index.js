import { Form, Input, Button, Checkbox, Row, Col } from 'antd';
import axios from 'axios';
import { useState } from 'react';
import './index.scss'

const SignUp = ({setIsLoginScreen}) => {

    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
    })

    const signUp = () => {
        console.log(state);
        axios.post("http://localhost:4000/users/register", state)
            .then(res => console.log(res)
            )
            .catch(err => console.log(err, ">>>"))
    }

    onchange = (e) => e.target.name && setState({ ...state, [e.target.name]: e.target.value });

    return (
        <Row className="login-container">
            <Col span={10} className="login-col">
                <h2>Sign Form</h2>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    // onFinish={onFinish}
                    // onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="firstName"
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your firstName!' }]}
                    >
                        <Input name="firstName" type="firstName" onChange={(e) => console.log(e.target.name, e.target.value)} />
                    </Form.Item>

                    <Form.Item
                        label="lastName"
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your lastName!' }]}
                    >
                        <Input name="lastName" type="lastName" onChange={(e) => console.log(e.target.name, e.target.value)} />
                    </Form.Item>

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

                    <Form.Item onClick={()=>setIsLoginScreen(true)} style={{ color: "#1890ff", cursor: "pointer" }} wrapperCol={{ offset: 8, span: 16 }}>
                        already account?
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" onClick={signUp}>
                            Register
        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );

}
export default SignUp;
