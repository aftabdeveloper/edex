"use client"
import { 
    PlusCircleOutlined,
    UserOutlined
 } from "@ant-design/icons"
import CmsLayout from "../../shared/layout/cms"
import {
    Button,
    Drawer,
    Form,
    Input,
    Select
} from 'antd'
import { useState } from "react"

const CmsPlan = ()=>{
    const[openDrawer,setOpenDrawer] = useState(true)

    return (
        <>
            <CmsLayout>
                <div>
                    <Button
                        type="primary"
                        className="bg-indigo-600"
                        size="large"
                        icon={<PlusCircleOutlined/>}
                        onClick={()=>setOpenDrawer(true)}
                    >Add Plan</Button>
                    <Drawer
                         title="New Plan"
                         open={openDrawer}
                         onClose={()=>setOpenDrawer(false)}
                         width={480}
                    >
                        <Form>
                            <Form.Item
                                label="Plan name"
                                name="plan"
                                rules={[{
                                    required: "Enter plan name"
                                }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Description"
                                name="description"
                                >
                                <Input.TextArea />
                            </Form.Item>
                            <span>Billing Frequency</span>
                            <div className="flex gap-2">
                                <Form.Item
                                    className="w-[70px]"

                                >
                                <Input placeholder="1"/>
                                </Form.Item>
                                <Form.Item
                                    className="flex-1"
                                    name="period"
                                >
                                    <Select placeholder="Months">
                                        <Select.Option value="days">Days</Select.Option>
                                        <Select.Option value="weeks">Weeks</Select.Option>
                                        <Select.Option value="months">Months</Select.Option>
                                        <Select.Option value="years">Years</Select.Option>

                                    </Select>
                                </Form.Item>
                            </div>
                            <Form.Item
                                    label="Billing Amount"
                                    name="amount"
                                    rules={[{
                                        required: "Enter billing amount"
                                    }]}
                            >
                                    <Input 
                                        placeholder="1000"
                                        addonBefore={<label>₹</label>}
                                        addonAfter={<label>Per Unit</label>}
                                    />
                            </Form.Item>
                            <Form.Item>
                                <div className="flex gap-1">
                                    <Button
                                        htmlType="submit"
                                        type="primary"
                                        className="bg-indigo-600 border-sm"
                                        size="large"
                                    >Create Plan</Button>
                                    <Button
                                        htmlType="button"
                                        size="large"
                                        onClick={()=>setOpenDrawer(false)}
                                    >Cancel</Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </Drawer>
                </div>
            </CmsLayout>
        </>
    )
}

export default CmsPlan