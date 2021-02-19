import React from 'react';
//components
import StepIndicator from '../StepIndicator/StepIndicator';
import Buttons from '../Buttons/Buttons';
//provider
import {
  useWizardState,
  useWizardDispatch,
} from '../../context/wizard.provider';
//actions
import {
  updateFiledsValueInformation,
  handleButtonNext,
} from '../../context/wizard.actions';
//styled
import {
  InformationWrapper,
  InformationContainerForm,
  Label,
  Input,
  Select,
  TextArea,
  Field,
  FieldRow,
  ButtonAdd,
  ButtonsWraper,
} from './Information.styles';

const Information = () => {
  const {
    informationForm,
    selectedIdForNextCategory,
    addNewSubgenre,
    currentStepIndicator,
    activeStepMode,
  } = useWizardState();
  const dispatch = useWizardDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(informationForm);
    if (activeStepMode.mode) {
      return dispatch(handleButtonNext(1));
    }

    dispatch(handleButtonNext(2));
  };

  const updateFieldValue = (field, value) => {
    dispatch(updateFiledsValueInformation(field, value));
  };

  return (
    <InformationWrapper>
      <StepIndicator />
      <form onSubmit={handleSubmit}>
        <InformationContainerForm>
          <Label>Book title</Label>
          <Input
            type="text"
            name="bookTitle"
            id="title"
            required
            placeholder="Book title"
            onChange={(e) => updateFieldValue(e.target.name, e.target.value)}
            value={informationForm.bookTitle}
          />

          <Label>Author</Label>
          <Select
            name="author"
            id="author"
            value={informationForm.author}
            onChange={(e) => updateFieldValue(e.target.name, e.target.value)}
          >
            <option value="">Author</option>
            <option value="example">Example</option>
          </Select>

          <Label>ISBN</Label>
          <Input
            type="text"
            name="isbn"
            id="isbn"
            placeholder="ISBN"
            onChange={(e) => updateFieldValue(e.target.name, e.target.value)}
            value={informationForm.isbn}
          />

          <Label>Publisher</Label>
          <Select
            name="publisher"
            id="publisher"
            value={informationForm.publisher}
            onChange={(e) => updateFieldValue(e.target.name, e.target.value)}
          >
            <option value="">Publisher</option>
            <option value="example">Example</option>
          </Select>

          <Field>
            <Label>Data Published</Label>
            <Input
              type="text"
              name="dataPublished"
              id="data published"
              placeholder="DD/MM/YYY"
              onChange={(e) => updateFieldValue(e.target.name, e.target.value)}
              value={informationForm.dataPublished}
            />
          </Field>

          <Field small>
            <Label>Number of pages</Label>
            <Input
              type="text"
              name="numberOfPages"
              id="number of apges"
              placeholder="Number of pages"
              onChange={(e) => updateFieldValue(e.target.name, e.target.value)}
              value={informationForm.numberOfPages}
            />
          </Field>
          <Field>
            <Label>Format</Label>
            <Input
              type="text"
              name="format"
              id="format"
              placeholder="Format"
              onChange={(e) => updateFieldValue(e.target.name, e.target.value)}
              value={informationForm.format}
            />
          </Field>

          <FieldRow>
            <Field margin>
              <Label>Edition</Label>
              <Input
                type="text"
                name="edition"
                id="edition"
                placeholder="Edition"
                onChange={(e) =>
                  updateFieldValue(e.target.name, e.target.value)
                }
                value={informationForm.edition}
              />
            </Field>

            <Field margin>
              <Label>Edition language</Label>
              <Select
                type="text"
                name="editionLanguage"
                value={informationForm.editionLanguage}
                id="edition"
                placeholder="Edition"
                onChange={(e) =>
                  updateFieldValue(e.target.name, e.target.value)
                }
              >
                <option value="">Edition language</option>
                <option value="example">Example</option>
              </Select>
            </Field>
          </FieldRow>

          <Label>Description</Label>
          <TextArea
            name="description"
            placeholder="Type the description..."
            onChange={(e) => updateFieldValue(e.target.name, e.target.value)}
            value={informationForm.description}
            required={
              selectedIdForNextCategory.description ||
              addNewSubgenre.descriptionRequired
            }
          />

          <ButtonsWraper>
            <Buttons />
            {currentStepIndicator === activeStepMode.max && (
              <ButtonAdd type="submit">Add</ButtonAdd>
            )}
          </ButtonsWraper>
        </InformationContainerForm>
      </form>
    </InformationWrapper>
  );
};

export default Information;
