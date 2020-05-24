import React from "react";

import { Modal } from "./Modal";
import { Invites } from "./Invites";

interface State {
  invites: string[];
  opened: boolean;
}

export class Root extends React.Component<{}, State> {
  public readonly state: State = {
    invites: [],
    opened: false
  };

  public toggle = () => {
    this.setState({ opened: !this.state.opened });
  };

  public invite = (name: string) => {
    const invites = [...this.state.invites, name];
    this.setState({ invites });
  };

  public render() {
    return (
      <>
        <button className="button" onClick={this.toggle}>
          Open invites list
        </button>
        <Modal opened={this.state.opened} onClose={this.toggle}>
          <Invites invites={this.state.invites} onAdd={this.invite} />
        </Modal>
      </>
    );
  }
}
