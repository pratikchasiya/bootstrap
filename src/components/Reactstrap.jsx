import React, {Fragment, useState} from "react";
import {Accordion} from "reactstrap";
import {AccordionBody, AccordionHeader, AccordionItem} from "reactstrap";

let array = [
  {
    title: "Accordion Item 1",
  },
  {title: "Accordion Item 2"},
  {title: "Accordion Item 3"},
  {title: "Accordion Item 4"},
];
const Reactstrap = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  
  return (
    <div>
      {array.map((x, i) => {
        return (
          <Fragment>
            <div>
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId={i}>{x.title}</AccordionHeader>
                  <AccordionBody accordionId={i}>
                    <strong>
                      This is the first item&#39;s accordion body.
                    </strong>
                    You can modify any of this with custom CSS or overriding our
                    default variables. It&#39;s also worth noting that just
                    about any HTML can go within the{" "}
                    <code>.accordion-body</code>, though the transition does
                    limit overflow.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Reactstrap;
