import { render, fireEvent } from "@testing-library/react";
import EloDialog from "./Dialog";
import "@testing-library/jest-dom";
import React from "react";

describe("EloDialog", () => {
  it("should render the dialog with title and description", () => {
    const { getByText } = render(
      <EloDialog title="Dialog Title" description="This is a description" onClose={() => {}} />
    );

    expect(getByText("Dialog Title")).toBeInTheDocument();
    expect(getByText("This is a description")).toBeInTheDocument();
  });

  it("should render children when passed", () => {
    const { getByText } = render(
      <EloDialog title="Dialog Title" onClose={() => {}}>
        <p>Dialog Content</p>
      </EloDialog>
    );

    expect(getByText("Dialog Content")).toBeInTheDocument();
  });

  it("should close the dialog when the close button is clicked", () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <EloDialog title="Dialog Title" onClose={onCloseMock} />
    );
    
    const closeButton = getByText("×");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  it("should render action buttons and trigger their onClick", () => {
    const actionMock = jest.fn();
    const { getByText } = render(
      <EloDialog
        title="Dialog Title"
        onClose={() => {}}
        actions={[
          { text: "Primary Action", onClick: actionMock },
          { text: "Secondary Action", variant: "secondary", onClick: actionMock },
        ]}
      />
    );

    const primaryButton = getByText("Primary Action");
    const secondaryButton = getByText("Secondary Action");

    fireEvent.click(primaryButton);
    fireEvent.click(secondaryButton);

    expect(actionMock).toHaveBeenCalledTimes(2); // Both actions should have been triggered
  });

  it("should set default variant as primary for action buttons", () => {
    const { getByText } = render(
      <EloDialog title="Dialog Title" onClose={() => {}} actions={[{ text: "Default Action", onClick: () => {} }]} />
    );
    
    const defaultButton = getByText("Default Action");
    expect(defaultButton).toHaveClass("bg-primary"); // Assuming "primary" button class applies bg-primary
  });

  it("should apply custom variant to action buttons", () => {
    const { getByText } = render(
      <EloDialog
        title="Dialog Title"
        onClose={() => {}}
        actions={[
          { text: "Success Action", variant: "success", onClick: () => {} },
          { text: "Error Action", variant: "error", onClick: () => {} },
        ]}
      />
    );

    const successButton = getByText("Success Action");
    const errorButton = getByText("Error Action");

    expect(successButton).toHaveClass("bg-success");
    expect(errorButton).toHaveClass("bg-error");
  });

  it("should not render description if not passed", () => {
    const { queryByText } = render(<EloDialog title="Dialog Title" onClose={() => {}} />);
    expect(queryByText("This is a description")).toBeNull();
  });

  it("should apply custom className", () => {
    const { getByTestId } = render(
      <EloDialog title="Dialog Title" onClose={() => {}} className="custom-class" />
    );
    
    const dialog = getByTestId("elo-dialog");
    expect(dialog).toHaveClass("custom-class");
  });
});
