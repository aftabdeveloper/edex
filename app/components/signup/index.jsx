"use client"
import Image from "next/image"
// use lazy load concept to import data because it is huge data
import CountryCodes from "@/json/CountryCodes" 
import { Form, Input, Button, Select, Divider,Checkbox } from 'antd';
import Link from "next/link";
import {
    FacebookFilled,
    GoogleOutlined,
    UserOutlined
} from '@ant-design/icons';
const {Item} = Form
const { Option } = Select;

const Signup = ()=>{
    const [signupForm]= Form.useForm()
    const onSignup = (values)=>{
         values.mobile = (values.code+values.mobile)
         delete values.code
         signupForm.resetFields()
        console.log(values)
    }
    const CountryCode = (
        <Item name="code" noStyle>
          <Select
            style={{
              width: 70,
            }}
          >
            {
                CountryCodes.map((country,countryIndex)=>(
                    <Option key={countryIndex} value={country.dial_code}>{country.dial_code}</Option>
                ))
            }
          </Select>
        </Item>
      );
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
                        <h1 className="text-4xl font-semibold">Signup for your account!</h1>
                        <p className="text-gray-600">Nice to see you! please signup with your account</p>
                    </div>
                    <div>
                        <Form
                            layout="vertical"
                            autoComplete="off"
                            onFinish={onSignup}
                            form={signupForm}
                            initialValues={
                                {
                                'code': '+91' 
                                }
                            }
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
                                label={<span className="text-gray-500 font-semibold">Mobile</span>}
                                name="mobile"
                                rules={[
                                    {
                                        required: true
                                    }
                            ]}
                            >
                                <Input 
                                    type="number"
                                    size="large"
                                    placeholder="Mobile no"
                                    addonBefore={CountryCode}
                                    style={{
                                        width: '100%',
                                    }}
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
                            <Item
                                name="term-and-conditions"
                                valuePropName="checked"
                                >
                                <Checkbox
                                    className="flex"
                                >
                                    <span className="mr-1">I accept</span>
                                    <Link href="/terms-and-condition">Terms & Conditions</Link>
                                </Checkbox>
                            </Item>

                            <Item>
                                <Button 
                                    size="large"
                                    type="primary" 
                                    htmlType="submit" 
                                    className="bg-indigo-600"
                                > Register
                                </Button>
                            </Item>
                        </Form>
                        <Divider>OR</Divider>
                        <div className="flex justify-center gap-5">
                            <Button
                                size="large"
                                icon={<GoogleOutlined className="text-orange-600"/>}
                                className="rounded-[4px] w-full border-orange-600"

                            >Signup with Google
                            </Button>
                            <Button
                                size="large"
                                icon={<FacebookFilled className="text-blue-600" />}
                                className="rounded-[4px] w-full border-blue-600"
                            >Signup with Facebook
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup