export function setAttribute<T>(key: string, value: T): void {
  const bean = __.newBean('no.item.xp.session.SessionBean');
  return bean.setAttribute(key, value);
}

export function getAttribute<T>(key: string): T | null {
  const bean = __.newBean('no.item.xp.session.SessionBean');
  return bean.getAttribute(key);
}

export function removeAttribute(key: string) :void {
  const bean = __.newBean('no.item.xp.session.SessionBean');
  return bean.removeAttribute(key);
}

export function getAttributeNames(key: string): Array<string> {
  const bean = __.newBean('no.item.xp.session.SessionBean');
  return bean.getAttributeNames();
}

export function getId(): string {
  const bean = __.newBean('no.item.xp.session.SessionBean');
  return bean.getId();
}

export function getCreationTime(): number {
  const bean = __.newBean('no.item.xp.session.SessionBean');
  return bean.getCreationTime();
}