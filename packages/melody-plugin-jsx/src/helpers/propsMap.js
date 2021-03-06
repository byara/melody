/**
 * Copyright 2017 trivago N.V.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const LOW = Symbol();
const props = {
    acceptCharset: 'accept-charset',
    accessKey: LOW,
    allowFullScreen: LOW,
    allowTransparency: LOW,
    autoComplete: LOW,
    autoFocus: LOW,
    autoPlay: LOW,
    cellPadding: LOW,
    cellSpacing: LOW,
    charSet: LOW,
    classID: LOW,
    className: 'class',
    colSpan: LOW,
    contentEditable: LOW,
    contextMenu: LOW,
    crossOrigin: LOW,
    dateTime: LOW,
    encType: LOW,
    formAction: LOW,
    formEncType: LOW,
    formMethod: LOW,
    formNoValidate: LOW,
    formTarget: LOW,
    frameBorder: LOW,
    hrefLang: LOW,
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    inputMode: LOW,
    keyParams: LOW,
    keyType: LOW,
    marginHeight: LOW,
    marginWidth: LOW,
    maxLength: LOW,
    mediaGroup: LOW,
    minLength: LOW,
    noValidate: LOW,
    playsInline: LOW,
    radioGroup: LOW,
    readOnly: LOW,
    referrerPolicy: LOW,
    rowSpan: LOW,
    spellCheck: LOW,
    srcDoc: LOW,
    srcLang: LOW,
    srcSet: LOW,
    tabIndex: 'tabindex',
    // Non-standard Properties
    autoCapitalize: LOW,
    autoCorrect: LOW,
    autoSave: LOW,
    itemProp: LOW,
    itemScope: LOW,
    itemType: LOW,
    itemID: LOW,
    itemRef: LOW,
    // SVG
    accentHeight: 'accent-height',
    alignmentBaseline: 'alignment-baseline',
    allowReorder: 'allow-reorder',
    arabicForm: 'arabic-form',
    attributeName: 'attribute-name',
    attributeType: 'attribute-type',
    autoReverse: 'auto-reverse',
    baseFrequency: 'base-frequency',
    baseProfile: 'base-profile',
    baselineShift: 'baseline-shift',
    calcMode: 'calc-mode',
    capHeight: 'cap-height',
    clipPath: 'clip-path',
    clipPathUnits: 'clip-path-units',
    clipRule: 'clip-rule',
    colorInterpolation: 'color-interpolation',
    colorInterpolationFilters: 'color-interpolation-filters',
    colorProfile: 'color-profile',
    colorRendering: 'color-rendering',
    contentScriptType: 'content-script-type',
    contentStyleType: 'content-style-type',
    diffuseConstant: 'diffuse-constant',
    dominantBaseline: 'dominant-baseline',
    edgeMode: 'edge-mode',
    enableBackground: 'enable-background',
    externalResourcesRequired: 'external-resources-required',
    fillOpacity: 'fill-opacity',
    fillRule: 'fill-rule',
    filterRes: 'filter-res',
    filterUnits: 'filter-units',
    floodColor: 'flood-color',
    floodOpacity: 'flood-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    fontSizeAdjust: 'font-size-adjust',
    fontStretch: 'font-stretch',
    fontStyle: 'font-style',
    fontVariant: 'font-variant',
    fontWeight: 'font-weight',
    glyphName: 'glyph-name',
    glyphOrientationHorizontal: 'glyph-orientation-horizontal',
    glyphOrientationVertical: 'glyph-orientation-vertical',
    glyphRef: 'glyph-ref',
    gradientTransform: 'gradient-transform',
    gradientUnits: 'gradient-units',
    horizAdvX: 'horiz-adv-x',
    horizOriginX: 'horiz-origin-x',
    imageRendering: 'image-rendering',
    kernelMatrix: 'kernel-matrix',
    kernelUnitLength: 'kernel-unit-length',
    keyPoints: 'key-points',
    keySplines: 'key-splines',
    keyTimes: 'key-times',
    lengthAdjust: 'length-adjust',
    letterSpacing: 'letter-spacing',
    lightingColor: 'lighting-color',
    limitingConeAngle: 'limiting-cone-angle',
    markerEnd: 'marker-end',
    markerHeight: 'marker-height',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    markerUnits: 'marker-units',
    markerWidth: 'marker-width',
    mask: 'mask',
    maskContentUnits: 'mask-content-units',
    maskUnits: 'mask-units',
    numOctaves: 'num-octaves',
    overlinePosition: 'overline-position',
    overlineThickness: 'overline-thickness',
    paintOrder: 'paint-order',
    pathLength: 'path-length',
    patternContentUnits: 'pattern-content-units',
    patternTransform: 'pattern-transform',
    patternUnits: 'pattern-units',
    pointerEvents: 'pointer-events',
    pointsAtX: 'points-at-X',
    pointsAtY: 'points-at-y',
    pointsAtZ: 'points-at-z',
    preserveAlpha: 'preserve-alpha',
    preserveAspectRatio: 'preserve-aspect-ratio',
    primitiveUnits: 'primitive-units',
    refX: 'ref-x',
    refY: 'ref-y',
    renderingIntent: 'rendering-intent',
    repeatCount: 'repeat-count',
    repeatDur: 'repeat-dur',
    requiredExtensions: 'required-extensions',
    requiredFeatures: 'required-features',
    shapeRendering: 'shape-rendering',
    specularConstant: 'specular-constant',
    specularExponent: 'specular-exponent',
    spreadMethod: 'spread-method',
    startOffset: 'start-offset',
    stdDeviation: 'std-deviation',
    stitchTiles: 'stitch-tiles',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strikethroughPosition: 'strikethrough-position',
    strikethroughThickness: 'strikethrough-thickness',
    strokeDasharray: 'stroke-dasharray',
    strokeDashoffset: 'stroke-dashoffset',
    strokeLinecap: 'stroke-linecap',
    strokeLinejoin: 'stroke-linejoin',
    strokeMiterlimit: 'stroke-miterlimit',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    surfaceScale: 'surface-scale',
    systemLanguage: 'system-language',
    tableValues: 'table-values',
    targetX: 'target-x',
    targetY: 'target-y',
    textAnchor: 'text-anchor',
    textDecoration: 'text-decoration',
    textLength: 'text-length',
    textRendering: 'text-rendering',
    underlinePosition: 'underline-position',
    underlineThickness: 'underline-thickness',
    unicodeBidi: 'unicode-bidi',
    unicodeRange: 'unicode-range',
    unitsPerEm: 'units-per-em',
    vAlphabetic: 'v-alphabetic',
    vHanging: 'v-hanging',
    vIdeographic: 'v-ideographic',
    vMathematical: 'v-mathematical',
    vectorEffect: 'vector-effect',
    vertAdvY: 'vert-adv-y',
    vertOriginX: 'vert-origin-x',
    vertOriginY: 'vert-origin-y',
    viewBox: 'view-box',
    viewTarget: 'view-target',
    wordSpacing: 'word-spacing',
    writingMode: 'writing-mode',
    xChannelSelector: 'x-channel-selector',
    xHeight: 'x-height',
    xlinkActuate: 'xlink:actuate',
    xlinkArcrole: 'xlink:arcrole',
    xlinkHref: 'xlink:href',
    xlinkRole: 'xlink:role',
    xlinkShow: 'xlink:show',
    xlinkTitle: 'xlink:title',
    xlinkType: 'xlink:type',
    xmlnsXlink: 'xmlns:xlink',
    xmlBase: 'xml:base',
    xmlLang: 'xml:lang',
    xmlSpace: 'xml:space',
    yChannelSelector: 'y-channel-selector',
    zoomAndPan: 'zoom-and-pan',
    // Event handlers
    onAbort: LOW,
    onAfterprint: LOW,
    onAnimationEnd: LOW,
    onAnimationIteration: LOW,
    onAnimationStart: LOW,
    onAppInstalled: LOW,
    onAudioProcess: LOW,
    onAudioEnd: LOW,
    onAudioStart: LOW,
    onBeforePrint: LOW,
    onBeforeUnload: LOW,
    onBeginEvent: LOW,
    onBlocked: LOW,
    onBlur: LOW,
    onBoundary: LOW,
    onCached: LOW,
    onCanplay: LOW,
    onCanplayThrough: LOW,
    onChange: LOW,
    onChargingChange: LOW,
    onChargingTimeChange: LOW,
    onChecking: LOW,
    onClick: LOW,
    onClose: LOW,
    onComplete: LOW,
    onCompositionEnd: LOW,
    onCompositionStart: LOW,
    onCompositionUpdate: LOW,
    onContextMenu: LOW,
    onCopy: LOW,
    onCut: LOW,
    onDblClick: LOW,
    onDeviceChange: LOW,
    onDeviceLight: LOW,
    onDeviceMotion: LOW,
    onDeviceOrientation: LOW,
    onDeviceProximity: LOW,
    onDischargingTimeChange: LOW,
    onDOMAttributeNameChanged: LOW,
    onDOMAttrModified: LOW,
    onDOMCharacterDataModified: LOW,
    onDOMContentLoaded: LOW,
    onDOMElementNameChanged: LOW,
    onDOMNodeInserted: LOW,
    onDOMNodeInsertedIntoDocument: LOW,
    onDOMNodeRemoved: LOW,
    onDOMNodeRemovedFromDocument: LOW,
    onDOMSubtreeModified: LOW,
    onDownloading: LOW,
    onDrag: LOW,
    onDragEnd: LOW,
    onDragEnter: LOW,
    onDragLeave: LOW,
    onDragOver: LOW,
    onDragStart: LOW,
    onDrop: LOW,
    onDurationChange: LOW,
    onEmptied: LOW,
    onEnd: LOW,
    onEnded: LOW,
    onError: LOW,
    onFocus: LOW,
    onFocusIn: LOW,
    onFocusOut: LOW,
    onFullscreenChange: LOW,
    onFullscreenError: LOW,
    onGamepadConnected: LOW,
    onGamepadDisconnected: LOW,
    onGotPointerCapture: LOW,
    onHashChange: LOW,
    onLostPointerCapture: LOW,
    onInput: LOW,
    onInvalid: LOW,
    onKeydown: LOW,
    onKeypress: LOW,
    onKeyup: LOW,
    onLanguageChange: LOW,
    onLevelChange: LOW,
    onLoad: LOW,
    onLoadEnd: LOW,
    onLoadStart: LOW,
    onMark: LOW,
    onMessage: LOW,
    onMouseDown: LOW,
    onMouseEnter: LOW,
    onMouseLeave: LOW,
    onMouseMove: LOW,
    onMouseOut: LOW,
    onMouseOver: LOW,
    onMouseUp: LOW,
    onNoMatch: LOW,
    onNotificationClick: LOW,
    onNoUpdate: LOW,
    onObsolete: LOW,
    onOffline: LOW,
    onOnline: LOW,
    onOpen: LOW,
    onOrientationChange: LOW,
    onPageHide: LOW,
    onPageShow: LOW,
    onPaste: LOW,
    onPause: LOW,
    onPointerCancel: LOW,
    onPointerDown: LOW,
    onPointerEnter: LOW,
    onPointerLeave: LOW,
    onPointerLockChange: LOW,
    onPointerLockError: LOW,
    onPointerMove: LOW,
    onPointerOut: LOW,
    onPointerOver: LOW,
    onPointerUp: LOW,
    onPlay: LOW,
    onPlaying: LOW,
    onPopState: LOW,
    onProgress: LOW,
    onPush: LOW,
    onPushSubscriptionChange: LOW,
    onRateChange: LOW,
    onReadyStateChange: LOW,
    onRepeatEvent: LOW,
    onReset: LOW,
    onResize: LOW,
    onResourceTimingBufferFull: LOW,
    onResult: LOW,
    onResume: LOW,
    onScroll: LOW,
    onSeeked: LOW,
    onSeeking: LOW,
    onSelect: LOW,
    onSelectStart: LOW,
    onSelectionChange: LOW,
    onShow: LOW,
    onSoundEnd: LOW,
    onSoundStart: LOW,
    onSpeechEnd: LOW,
    onSpeechStart: LOW,
    onStalled: LOW,
    onStart: LOW,
    onStorage: LOW,
    onSubmit: LOW,
    onSuccess: LOW,
    onSuspend: LOW,
    onSVGAbort: LOW,
    onSVGError: LOW,
    onSVGLoad: LOW,
    onSVGResize: LOW,
    onSVGScroll: LOW,
    onSVGUnload: LOW,
    onSVGZoom: LOW,
    onTimeout: LOW,
    onTimeUpdate: LOW,
    onTouchCancel: LOW,
    onTouchEnd: LOW,
    onTouchMove: LOW,
    onTouchStart: LOW,
    onTransitionEnd: LOW,
    onUnload: LOW,
    onUpdateReady: LOW,
    onUpgradeNeeded: LOW,
    onUserProximity: LOW,
    onVoicesChanged: LOW,
    onVersionChange: LOW,
    onVisibilityChange: LOW,
    onVolumeChange: LOW,
    onWaiting: LOW,
    onWheel: LOW,
};

const propsMap = {};
for (const prop in props) {
    const value = props[prop];
    let key = value;
    if (value === LOW) {
        key = prop.toLowerCase();
    }
    propsMap[key] = prop;
}

export default propsMap;
