import React, { useState } from "react";

export default function TodoApp() {
  const [inputval, setInputVal] = useState("");
  const [inputvalArr, setInputValArr] = useState([]);
  const [newinputval, setNewinputval] = useState("");
  const [newinputvalarr, setNewinputvalarr] = useState([]);

  function addFunc() {
    if (!(inputval === "")) {
      setInputValArr([...inputvalArr, inputval]);
      setInputVal("");
      localStorage.getItem("Todo List", JSON.stringify(inputvalArr));
      console.log(inputvalArr);
    } else {
      alert("Plz Enter Your Todo");
    }
  }

  function hundleDel(index) {
    const del = [...inputvalArr];
    del.splice(index, 1);
    setInputValArr(del);
  }
  function hundleUpdate() {
    const update = [...inputvalArr];
    update[newinputvalarr] = newinputval;
    setInputValArr(update);
    setNewinputvalarr(null);
    setNewinputval("");
  }

  function hundleEdit(item, index) {
    setNewinputvalarr(index);
    setNewinputval(item);
  }
  return (
    <div className="flex justify-center mt-8">
      <div className="w-[400px] min-h-[450px] bg-[#5A3896] text-white  p-5 rounded-md">
        <h1 className="text-center text-xl text-[#E43987]">Todo App</h1>

        <div>
          <input
            type="text"
            placeholder="Enter Todo Task"
            className="mt-6 mr-4 px-3 py-1 text-black rounded-md"
            value={inputval}
            onChange={(e) => setInputVal(e.target.value)}
            max={10}
          />
          <button
            className="bg-[#E43987] px-4 py-1 rounded-md"
            onClick={addFunc}
          >
            Task
          </button>
          {inputvalArr.map((item, index) => {
            return (
              <div className="flex justify-start gap-3 items-cente mt-7 px-2 py-2] ">
                {newinputvalarr === index ? (
                  <>
                    <input
                      type="text"
                      className="  text-black rounded-md pl-2"
                      onChange={(e) => setNewinputval(e.target.value)}
                      value={newinputval}
                    />
                    <button
                      className=" bg-[#302f38] px-2 py-1 rounded-md text-md"
                      onClick={hundleUpdate}
                    >
                      Update
                    </button>
                  </>
                ) : (
                  <>
                    <h4 className=" bg-[#302f38] w-[200px]  rounded-md px-3 py-1">
                      {item}
                    </h4>

                    <button
                      className=" bg-[#302f38] px-2 py-1 rounded-md text-md"
                      onClick={() => hundleEdit(item, index)}
                    >
                      Edit
                    </button>
                  </>
                )}

                <button
                  className=" bg-[#302f38] px-2 py-1 rounded-md text-md"
                  onClick={(index) => hundleDel(index)}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
