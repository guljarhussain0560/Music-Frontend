import React from 'react';

const ImageInput = ({
  label,
  id,
  errors,
  register,
  required,
  message,
  className,
  setImagePreview,
}) => {
  
  // Handle file size and preview
  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 90 * 1024) { // 90 KB limit
        alert('Image size should not exceed 90 KB.');
        e.target.value = null; // reset the input
        setImagePreview(null); // remove preview
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <label htmlFor={id} className="font-semibold text-md text-slate-800">
        {label}
      </label>

      <input
        type="file"
        id={id}
        accept="image/*"
        className={`px-2 py-2 border ${
          errors[id]?.message ? "border-red-500" : "border-slate-700"
        } outline-none bg-transparent text-slate-700 rounded-md`}
        {...register(id, {
          required: { value: required, message },
        })}
        onChange={handleChange}
      />

      {errors[id]?.message && (
        <p className="text-sm font-semibold text-red-500 mt-0">
          {errors[id]?.message}*
        </p>
      )}
    </div>
  );
};

export default ImageInput;
