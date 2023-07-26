import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { editCategory } from "../../Store/Slices/categorySlice";

const EditCategory = ({ editCat, setEditCat }) => {
  const dispatch = useDispatch();
  const handleEditCat = (e) => {
    e.preventDefault();

    dispatch(editCategory(editCat));
  };
  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div
      className="modal fade"
      id="EditCategory"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content rounded-0 position-relative">
          <div className="modal-header AddressBookModal_Header border-0">
            <span
              className="modal-title AddressBook_Title"
              id="exampleModalLongTitle"
            >
              Edit Category
            </span>
            <button
              type="button"
              className="close btn border-0"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body p-3 pb-0">
            <form
              method="POST"
              className="DCC_Checkout_Form"
              onSubmit={handleEditCat}
            >
              <div className="mb-3">
                <label htmlFor="FullName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="true"
                  maxLength="25"
                  required
                  className="form-control rounded-0 shadow-none DCC_Checkout_Input"
                  value={editCat?.name || ""}
                  onChange={(e) =>
                    setEditCat({ ...editCat, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <label htmlFor="Address" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control rounded-0 shadow-none"
                  id="description"
                  name="description"
                  autoComplete="true"
                  maxLength="250"
                  rows="5"
                  cols="40"
                  required
                  value={editCat?.description || ""}
                  onChange={(e) =>
                    setEditCat({ ...editCat, description: e.target.value })
                  }
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-outline-primary FS_12 rounded-0 text-center w-100"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  disabled={editCat?.name?.length > 2 ? false : true}
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
