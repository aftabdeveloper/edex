"use client"
import Image from "next/image"
import { Form, Input, Button, Select } from 'antd';
import {
    UserOutlined
} from '@ant-design/icons';
const {Item} = Form
const { Option } = Select;

const SignIn = ()=>{
    const [signInForm]= Form.useForm()
    const onSignIn = (values)=>{
        console.log(values)
    }
    
    return (
        <>
            <div className="grid md:grid-cols-2">
                <div className="flex flex-col p-2 md:min-h-screen justify-center items-center gap-8 bg-[#E6F0F9]">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-4xl font-bold">Edex</h1>
                        <p>Manage your school inventory and business</p>
                    </div>
                    <Image 
                        src="./images/signup.svg"
                        alt="signup"
                        width={480}
                        height={480}
                    />
                </div>
                <div className="flex flex-col gap-8 md:p-16 p-8">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="text-4xl font-semibold">Welcome Back!</h1>
                        <p className="text-gray-600">Nice to see you! please signin with your account</p>
                    </div>
                    <div>
                        <Form
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onSignIn}
                            form={signInForm}
                        >
                            <Item 
                                label={<span className="text-gray-500 font-semibold">Email Address</span>}
                                name="email"
                                rules={[{
                                    type: "email",
                                    required: true
                                }]}
                            >
                                <Input 
                                    size="large"
                                    placeholder="Email"
                                    prefix={<UserOutlined className="site-form-item-icon" />}
                                />
                            </Item>
                          
                            <Item
                                label={<span className="text-gray-500 font-semibold">Password</span>}
                                name="password"
                                rules={[{
                                    type: "password",
                                    required: true
                                }]}
                            >
                                <Input.Password 
                                    size="large"
                                />

                            </Item>

                            <Item>
                                <Button 
                                    size="large"
                                    type="primary" 
                                    htmlType="submit" 
                                    className="bg-indigo-600"
                                > SignIn
                                </Button>
                            </Item>
                        </Form>                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn