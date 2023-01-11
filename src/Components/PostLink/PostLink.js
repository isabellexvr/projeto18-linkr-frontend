import {
  Redirect,
  LinkStyle,
  UrlTextInfo,
  UrlTitle,
  UrlDescription,
  Url,
  UrlImage,
} from "./PostLinkStyles";

export default function PostLink(props) {
  const { linkTitle, linkDescription, linkUrl, linkImage } = props.metadata;

  return (
    <Redirect href={linkUrl} target='_blank'>
      <LinkStyle>
        <UrlTextInfo>
          <UrlTitle>{linkTitle}</UrlTitle>
          <UrlDescription>{linkDescription?.substring(0, 80)}</UrlDescription>
          <Url>{linkUrl}</Url>
        </UrlTextInfo>
        <UrlImage alt='url' src={linkImage} />
      </LinkStyle>
    </Redirect>
  );
}
