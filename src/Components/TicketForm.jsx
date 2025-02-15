import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TicketForm = ({ onSubmit }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: "",
    projectInfo: "",
  });
  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("formData"));
    if (savedData) setFormData(savedData);
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const validate = () => {
    let errors = {};
    if (!formData.fullName.trim()) errors.fullName = "Full Name is required.";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      errors.email = "Invalid email format.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(errors);
    }
  navigate("/Ticket", { state: formData });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange({ target: { files: [file] } });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg sm:max-w-2xl bg-[#041E23] p-6 sm:p-10 rounded-lg shadow-lg border border-[#166270]">
        <div>
        <div className="font-light mb-6 text-white text-center sm:text-left">
      <div className="grid grid-cols-2 items-center relative">
      <h2 className="text-xl sm:text-2xl font-light mb-2">Attendee Details</h2>
      <h5 className="text-right">Step 2/3</h5>

      {/* Gradient Line */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] mb-2">
        <div className="w-1/2 h-full bg-[#145F6C] inline-block"></div>
        <div className="w-1/2 h-full bg-[#093239] inline-block"></div>
      </div>
    </div>
</div>

    </div>
        
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-10 bg-[rgb(8,37,43)] rounded-lg shadow-md border border-[#166270]"
        >
        <div className="bg-[#052228] p-10 rounded-2xl ">
            <h5 className="text-white text-center sm:text-left mb-4">Upload Profile Photo</h5>
          <div className="bg-[#041B20] border-[#072E35] px-20 mx-12 ">    
            <div className=" py-10 text-center rounded-2xl cursor-pointer bg-[#0E464F]"
            onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
                onClick={() => document.getElementById("fileUpload").click()}
                >
                {imagePreview ? (
                    <img
                    src={imagePreview}
                    alt="Profile Preview"
                    className="w-24 h-24 mx-auto rounded-full object-cover"
                    />
                ) : (
                    <div className="flex flex-col items-center">
                    <i className="fas fa-cloud-arrow-up text-white text-4xl mb-2"></i>
                    <p className="text-white p-2">Drag & drop or click to upload.</p>
                    </div>
                )}
                <input
                    type="file"
                    id="fileUpload"
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
        </div>
        </div>
</div>
          <div className="space-y-4">
            <label className="block text-white my-4">
              Enter your name:
              <input
                type="text"
                className="p-2 w-full bg-[#08252B] text-white rounded-lg border border-[#072E35] outline-none focus:ring-2 focus:ring-[#24A0B5]"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm">{errors.fullName}</p>
              )}
            </label>

            <label className="block text-white">
              Enter your email*:
              <input
                type="email"
                className="p-2 w-full bg-[#08252B] text-white rounded-lg border border-[#072E35] outline-none focus:ring-2 focus:ring-[#24A0B5]"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </label>

            <label className="block text-white">
              About the project:
              <textarea
                className="p-2 w-full rounded-lg bg-[#08252B] text-white border border-[#072E35] outline-none focus:ring-2 focus:ring-[#24A0B5]"
                placeholder="Enter project details"
                value={formData.projectInfo}
                onChange={(e) =>
                  setFormData({ ...formData, projectInfo: e.target.value })
                }
                rows="4"
              ></textarea>
            </label>
          </div>
           
          <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-row ">
            <button
              type="button"
              className="w-full sm:w-auto bg-transparent text-[#24A0B5] p-2 rounded-lg border border-[#24A0B5] hover:bg-[#24A0B5] hover:text-white transition"
              onClick={() => navigate("/Ticket")}
            >
              Back
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#24A0B5] text-white p-2 rounded-lg border border-[#166270] hover:bg-[#1c8a9f] transition"
            >
              Get My Free Ticket
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TicketForm;
