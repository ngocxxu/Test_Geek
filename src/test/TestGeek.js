import React, { useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { Collapse } from "antd";

const { Panel } = Collapse;

export default function TestGeek(props) {
  const [stateKey, setStateKey] = useState([""]);
  function callback(key) {
    // console.log(key);
  }
  const handleDropdown = () => {
    setStateKey(["1"]);
  };
  const handleDropdown2 = () => {
    setStateKey(["2"]);
  };
  const handleDropdown3 = () => {
    setStateKey(["3"]);
  };
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={handleDropdown} target="_blank" rel="noopener noreferrer">
          Câu 1
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={handleDropdown2} target="_blank" rel="noopener noreferrer">
          Câu 2
        </a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={handleDropdown3} target="_blank" rel="noopener noreferrer">
          Câu 3
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div>
      <div className="mb-5">
        <Dropdown overlay={menu} placement="bottomLeft" arrow>
          <Button>Choose question</Button>
        </Dropdown>
      </div>
      <div className="mt-5">
        <Collapse
          defaultActiveKey={["1"]}
          activeKey={stateKey}
          onChange={callback}
        >
          <Panel header="Câu 1: Khi truy cập vào 1 trang web trình duyệt làm gì" key="1">
            <p>Khi truy cập trang web, trình duyệt sẽ gọi tới máy chủ DNS để biên dịch URL trang web thành một địa chỉ IP</p>
            <p>Trình duyệt sẽ sử dụng địa chi IP đó để yêu cầu HTTP gọi tới Server lưu trữ trang web</p>
            <p>Nếu Server chấp nhận thì sẽ gửi lại thông báo 200 OK SUCCESS</p>
            <p>Khi trình duyệt nhận được mã HTML đó từ Server thì nó sẽ hiển thị ra cửa sổ của trình duyệt một trang web hoàn chỉnh</p>
          </Panel>
          <Panel header="Câu 2" key="2">
            <p>Khác nhau giữa desktop và mobile first là sự ưu tiên về responsive</p>
            <p>Với desktop first: ta sẽ responsive từ màn hình lớn của desktop rồi mới tới các kích thước như table `{'>'}` mobile và ta sẽ dùng thuộc tính css max-width </p>
            <p>Ngược lại với mobile first thì độ ưu tiên khi responsive là mobile `{'>'}` tablet `{'>'}` desktop và ta sẽ dùng thuộc tính css min-width</p>
          </Panel>
          <Panel header="Câu 3" key="3">
            <p>Nó sẽ ưu tiên cho trường hợp css Inline bằng cách nhúng css trực tiếp vào tag</p>
          </Panel>
        </Collapse>
        ,
      </div>
    </div>
  );
}
