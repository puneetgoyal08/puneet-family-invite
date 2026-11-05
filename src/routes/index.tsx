import { createFileRoute } from "@tanstack/react-router";
import {
  Nav,
  Hero,
  Families,
  Celebrations,
  Travel,
  Closing,
} from "@/components/wedding/sections";
import { Rsvp, Gallery } from "@/components/wedding/interactive";
import { ShareButton } from "@/components/wedding/share";
import { InvitationOpener } from "@/components/wedding/invitation-opener";
import { MusicToggle } from "@/components/wedding/music";
import { useState } from "react";
import { coupleNames, wedding } from "@/config/wedding";

const title = `${coupleNames} — Wedding Invitation`;
const description = `${wedding.host.from} invite you to celebrate the wedding of ${coupleNames}. Events, travel, RSVP and more.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  const [invitationOpened, setInvitationOpened] = useState(false);

  return (
    <main>
      {!invitationOpened && <InvitationOpener onOpened={() => setInvitationOpened(true)} />}
      <div aria-hidden={!invitationOpened} inert={!invitationOpened}>
        <Nav />
        <Hero />
        <Families />
        <Celebrations />
        <Travel />
        <Rsvp />
        <Gallery />
        <Closing />
        <ShareButton variant="float" />
        <MusicToggle />
      </div>
    </main>
  );
}
