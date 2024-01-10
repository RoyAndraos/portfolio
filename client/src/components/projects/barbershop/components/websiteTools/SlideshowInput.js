import React, { useContext, useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { NotificationContext } from "../contexts/NotficationContext";
import { ImageContext } from "../contexts/ImageContext";
const ImageInput = ({ filename, height, initialImage }) => {
  const { images, setImages } = useContext(ImageContext);
  const { setNotification } = useContext(NotificationContext);
  const [previewSource, setPreviewSource] = useState("");
  const [imageHeight, setImageHeight] = useState("");
  useEffect(() => {
    if (height) {
      setImageHeight(height);
    }
    if (initialImage) {
      setPreviewSource(initialImage);
    }
  }, [height, initialImage]);
  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };
  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };
  const uploadImage = async (base64EncodedImage) => {
    try {
      setNotification("Image uploaded successfully");
      setImages([...images, { filename, data: base64EncodedImage }]);
    } catch (err) {
      setNotification("Something went wrong");
    }
  };
  return (
    <Wrapper>
      <div>
        <StyledChooseFile>
          Choose File
          <StyledInput
            type="file"
            name="image"
            key="slideshow"
            onChange={(e) => handleFileInputChange(e)}
          />
        </StyledChooseFile>
        <StyledButton key={"submit"} onClick={(e) => handleSubmitFile(e)}>
          Submit
        </StyledButton>
      </div>
      {previewSource && (
        <StyledChosenImage
          src={previewSource}
          alt="chosen picture"
          imageheight={imageHeight}
        />
      )}
    </Wrapper>
  );
};

const StyledInput = styled.input`
  display: none;
`;
const StyledChooseFile = styled.label`
  background-color: #035e3f;
  color: whitesmoke;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 5px 10px 5px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: 0.3s ease-in-out;
  width: 100px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.98);
  }
`;
const StyledButton = styled.button`
  background-color: #035e3f;
  color: whitesmoke;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  padding: 5px 10px 5px 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  height: 35px;
  margin-left: 20px;
  transition: 0.3s ease-in-out;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    transform: scale(0.98);
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
`;
const StyledChosenImage = styled.img`
  height: ${(props) => (props.imageheight === "200px" ? "200px" : "300px")};
  width: auto;
  margin-top: 20px;
  box-shadow: ${(props) =>
    props.imageheight === "200px" ? "0 0 10px black" : ""};
`;
export default ImageInput;
