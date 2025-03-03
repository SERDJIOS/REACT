import { Button, Form, Input } from 'antd';

export default function MyForm() {
  const [form] = Form.useForm();

  const onFinish = (values) => console.log('Form values:', values)
  const onFinishFailed = (errorInfo) => console.log('Error:', errorInfo)

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      name="login"
      initialValues={{ remember: true }}
    >
      <Form.Item label="Username" name="username" rules={[{ required: true, message: "Please type username" }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please type password" }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  )
}