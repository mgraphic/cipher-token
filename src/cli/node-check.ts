export const getNodeVersion = (): string => process.versions.node;

export function eq(version: string): boolean {
  return compareVersions(getNodeVersion(), version) === 0;
}

export function lt(version: string): boolean {
  return compareVersions(getNodeVersion(), version) < 0;
}

export function lte(version: string): boolean {
  return compareVersions(getNodeVersion(), version) <= 0;
}

export function gt(version: string): boolean {
  return compareVersions(getNodeVersion(), version) > 0;
}

export function gte(version: string): boolean {
  return compareVersions(getNodeVersion(), version) >= 0;
}

export function ne(version: string): boolean {
  return compareVersions(getNodeVersion(), version) !== 0;
}

export function compareVersions(a: string, b: string): -1 | 0 | 1 {
  const versionA = a.split('.').map(Number);
  const versionB = b.split('.').map(Number);

  for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
    const partA = versionA[i] || 0;
    const partB = versionB[i] || 0;

    if (partA > partB) return 1;
    if (partA < partB) return -1;
  }

  return 0;
}
