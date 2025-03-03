import { Button } from "antd"
import MyForm from "./MyForm"
export default function App () {
  return (
    <div>
      <header>
        Header
      </header>
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
      <MyForm></MyForm>
    </div>
  )
}