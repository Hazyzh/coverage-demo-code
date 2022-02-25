import {
  Attachment as Harry,
  Close,
  ExternalLink,
} from '@ringcentral/juno/icon';

export const StyledRcTypography = styled(Harry)`
  margin-left: ${spacing(4)} !important;
`;
export const StyledIconContainer = styled(Close)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledIcon = styled(ExternalLink)`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  margin: ${spacing(4)} 0;
`;

