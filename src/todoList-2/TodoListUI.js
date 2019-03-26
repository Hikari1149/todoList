import React  from 'react';
import {Button, Input,List} from "antd";

function TodoListUI(props){
    return (
        <div>
            <Input  size="large"
                    placeholder="i am input .."
                    style={{width:'400px',fontSize:'24px',marginRight:'10px'}}
                    value={props.inputValue}
                    onChange={props.handleChange}
            />
            <Button type="primary"
                    size="large"
                    onClick={props.handleClick}
            >
                提交哦
            </Button>
            <List
                style={{width:'400px'}}
                bordered
                dataSource={props.list}
                renderItem={(item,index) => (<List.Item onClick={()=>props.handleDelete(index)}>{item}</List.Item>)}
            />
        </div>
    )
}
export default TodoListUI;