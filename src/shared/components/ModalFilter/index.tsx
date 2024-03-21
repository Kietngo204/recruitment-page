import { Button, Checkbox, Form, Modal } from "antd";
import ModalFilterItem from "./ModalFilterItem";
import { useRef, useState } from "react";
import { listCompany, listSpecialized } from "./ModalFilterData";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { useAppDispatch, useAppSelector } from "../../../core/redux/hooks";
import { setCloseModalFilter } from "../../../core/redux/features/modalFilter/modalFilterSlice";
import { getJobs } from "../../../core/redux/actions/jobsActionThunk";

const ModalFilter = () => {
  const { openFilter } = useAppSelector((state) => state.modalFilter);
  const dispatch = useAppDispatch();
  const [selectedBg, setSelectedBg] = useState<number>(1);
  const [checkedItems, setCheckedItems] = useState<CheckboxValueType[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const bntRef = useRef<HTMLButtonElement>(null);

  // console.log(checkedItems);

  const handleCancel = () => {
    dispatch(setCloseModalFilter());
  };
  const handleBgClick = (id: number) => {
    setSelectedBg(id);
  };

  // Hàm để chọn hoặc bỏ chọn tất cả các checkbox
  const handleSelectAll = () => {
    setSelectAll((prevSelectAll) => !prevSelectAll);
    if (!selectAll) {
      const allSpecializedValues = listSpecialized.map((item) => item.value);
      setCheckedItems(allSpecializedValues);
    } else {
      setCheckedItems([]);
    }
  };
  const handleCheckboxChange = (checkedValues: CheckboxValueType[]) => {
    setCheckedItems(checkedValues);
  };

  const onFinish = (values: any) => {
    let { checkbox } = values;
    checkbox = [...checkedItems];

    console.log("checkbox:", checkbox);
    dispatch(getJobs());
    handleCancel();
  };

  const handleOutsideButtonClick = () => {
    if (bntRef.current) {
      bntRef.current.click();
    }
  };

  return (
    <Modal
      title="Chọn công ty"
      open={openFilter}
      onCancel={handleCancel}
      footer={false}
    >
      <div className="flex flex-wrap gap-2">
        {listCompany.map((item) => {
          return (
            <ModalFilterItem
              key={item.id}
              company={item.name}
              id={item.id}
              onItemClick={() => handleBgClick(item.id)}
              selectedBg={selectedBg}
            />
          );
        })}
      </div>
      <div className="mt-5">
        <div className="flex justify-between">
          <h4 className="text-[rgba(0, 0, 0, 0.88)] text-base font-semibold">
            Chọn lĩnh vực chuyên môn
          </h4>
          <p
            className="text-xs text-orange-alta underline"
            onClick={handleSelectAll}
          >
            Chọn tất cả
          </p>
        </div>
        <div className="mt-3">
          <Form onFinish={onFinish} autoComplete="off">
            <Form.Item name="checkbox" valuePropName="checkbox">
              <Checkbox.Group
                className="flex h-[216px] flex-col flex-nowrap gap-1"
                value={checkedItems}
                onChange={handleCheckboxChange}
                name="checkbox"
              >
                {listSpecialized.map((item) => (
                  <Checkbox
                    key={item.label}
                    value={item.value}
                    className={`flex-row-reverse justify-between rounded px-4 py-[10px] ${
                      checkedItems.includes(item.value)
                        ? "bg-[#F1F3F5]"
                        : "bg-white"
                    } after:hidden`}
                  >
                    {item.value}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </Form.Item>
            <Form.Item className="hidden">
              <Button ref={bntRef} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          <div className="mt-9 flex justify-center gap-3">
            <Button
              type="default"
              className="h-full px-8 py-2"
              onClick={handleCancel}
            >
              Hủy bỏ
            </Button>
            <Button
              type="primary"
              className="h-full bg-orange-alta px-8 py-2"
              onClick={handleOutsideButtonClick}
            >
              Áp dụng
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalFilter;
