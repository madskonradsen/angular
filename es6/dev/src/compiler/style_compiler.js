var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SourceModule, SourceExpression, moduleRef } from './source_module';
import { ViewEncapsulation } from 'angular2/src/core/metadata/view';
import { XHR } from 'angular2/src/compiler/xhr';
import { IS_DART, isBlank } from 'angular2/src/facade/lang';
import { PromiseWrapper } from 'angular2/src/facade/async';
import { ShadowCss } from 'angular2/src/compiler/shadow_css';
import { UrlResolver } from 'angular2/src/compiler/url_resolver';
import { extractStyleUrls } from './style_url_resolver';
import { escapeSingleQuoteString, codeGenExportVariable, MODULE_SUFFIX } from './util';
import { Injectable } from 'angular2/src/core/di';
const COMPONENT_VARIABLE = '%COMP%';
const HOST_ATTR = `_nghost-${COMPONENT_VARIABLE}`;
const CONTENT_ATTR = `_ngcontent-${COMPONENT_VARIABLE}`;
export let StyleCompiler = class StyleCompiler {
    constructor(_xhr, _urlResolver) {
        this._xhr = _xhr;
        this._urlResolver = _urlResolver;
        this._styleCache = new Map();
        this._shadowCss = new ShadowCss();
    }
    compileComponentRuntime(template) {
        var styles = template.styles;
        var styleAbsUrls = template.styleUrls;
        return this._loadStyles(styles, styleAbsUrls, template.encapsulation === ViewEncapsulation.Emulated);
    }
    compileComponentCodeGen(template) {
        var shim = template.encapsulation === ViewEncapsulation.Emulated;
        return this._styleCodeGen(template.styles, template.styleUrls, shim);
    }
    compileStylesheetCodeGen(stylesheetUrl, cssText) {
        var styleWithImports = extractStyleUrls(this._urlResolver, stylesheetUrl, cssText);
        return [
            this._styleModule(stylesheetUrl, false, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, false)),
            this._styleModule(stylesheetUrl, true, this._styleCodeGen([styleWithImports.style], styleWithImports.styleUrls, true))
        ];
    }
    clearCache() { this._styleCache.clear(); }
    _loadStyles(plainStyles, absUrls, encapsulate) {
        var promises = absUrls.map((absUrl) => {
            var cacheKey = `${absUrl}${encapsulate ? '.shim' : ''}`;
            var result = this._styleCache.get(cacheKey);
            if (isBlank(result)) {
                result = this._xhr.get(absUrl).then((style) => {
                    var styleWithImports = extractStyleUrls(this._urlResolver, absUrl, style);
                    return this._loadStyles([styleWithImports.style], styleWithImports.styleUrls, encapsulate);
                });
                this._styleCache.set(cacheKey, result);
            }
            return result;
        });
        return PromiseWrapper.all(promises).then((nestedStyles) => {
            var result = plainStyles.map(plainStyle => this._shimIfNeeded(plainStyle, encapsulate));
            nestedStyles.forEach(styles => result.push(styles));
            return result;
        });
    }
    _styleCodeGen(plainStyles, absUrls, shim) {
        var arrayPrefix = IS_DART ? `const` : '';
        var styleExpressions = plainStyles.map(plainStyle => escapeSingleQuoteString(this._shimIfNeeded(plainStyle, shim)));
        for (var i = 0; i < absUrls.length; i++) {
            var moduleUrl = this._createModuleUrl(absUrls[i], shim);
            styleExpressions.push(`${moduleRef(moduleUrl)}STYLES`);
        }
        var expressionSource = `${arrayPrefix} [${styleExpressions.join(',')}]`;
        return new SourceExpression([], expressionSource);
    }
    _styleModule(stylesheetUrl, shim, expression) {
        var moduleSource = `
      ${expression.declarations.join('\n')}
      ${codeGenExportVariable('STYLES')}${expression.expression};
    `;
        return new SourceModule(this._createModuleUrl(stylesheetUrl, shim), moduleSource);
    }
    _shimIfNeeded(style, shim) {
        return shim ? this._shadowCss.shimCssText(style, CONTENT_ATTR, HOST_ATTR) : style;
    }
    _createModuleUrl(stylesheetUrl, shim) {
        return shim ? `${stylesheetUrl}.shim${MODULE_SUFFIX}` : `${stylesheetUrl}${MODULE_SUFFIX}`;
    }
};
StyleCompiler = __decorate([
    Injectable(), 
    __metadata('design:paramtypes', [XHR, UrlResolver])
], StyleCompiler);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3R5bGVfY29tcGlsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLTY3WWVuSnVzLnRtcC9hbmd1bGFyMi9zcmMvY29tcGlsZXIvc3R5bGVfY29tcGlsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O09BQ08sRUFBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFDLE1BQU0saUJBQWlCO09BQ2xFLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxpQ0FBaUM7T0FDMUQsRUFBQyxHQUFHLEVBQUMsTUFBTSwyQkFBMkI7T0FDdEMsRUFBQyxPQUFPLEVBQWlCLE9BQU8sRUFBQyxNQUFNLDBCQUEwQjtPQUNqRSxFQUFDLGNBQWMsRUFBQyxNQUFNLDJCQUEyQjtPQUNqRCxFQUFDLFNBQVMsRUFBQyxNQUFNLGtDQUFrQztPQUNuRCxFQUFDLFdBQVcsRUFBQyxNQUFNLG9DQUFvQztPQUN2RCxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCO09BQzlDLEVBQ0wsdUJBQXVCLEVBQ3ZCLHFCQUFxQixFQUVyQixhQUFhLEVBQ2QsTUFBTSxRQUFRO09BQ1IsRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0I7QUFFL0MsTUFBTSxrQkFBa0IsR0FBRyxRQUFRLENBQUM7QUFDcEMsTUFBTSxTQUFTLEdBQUcsV0FBVyxrQkFBa0IsRUFBRSxDQUFDO0FBQ2xELE1BQU0sWUFBWSxHQUFHLGNBQWMsa0JBQWtCLEVBQUUsQ0FBQztBQUd4RDtJQUlFLFlBQW9CLElBQVMsRUFBVSxZQUF5QjtRQUE1QyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVUsaUJBQVksR0FBWixZQUFZLENBQWE7UUFIeEQsZ0JBQVcsR0FBbUMsSUFBSSxHQUFHLEVBQTZCLENBQUM7UUFDbkYsZUFBVSxHQUFjLElBQUksU0FBUyxFQUFFLENBQUM7SUFFbUIsQ0FBQztJQUVwRSx1QkFBdUIsQ0FBQyxRQUFpQztRQUN2RCxJ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QixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUNwRixDQUFDO0lBRU8sYUFBYSxDQUFDLEtBQWEsRUFBRSxJQUFhO1FBQ2hELE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxTQUFTLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDcEYsQ0FBQztJQUVPLGdCQUFnQixDQUFDLGFBQXFCLEVBQUUsSUFBYTtRQUMzRCxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsYUFBYSxRQUFRLGFBQWEsRUFBRSxHQUFHLEdBQUcsYUFBYSxHQUFHLGFBQWEsRUFBRSxDQUFDO0lBQzdGLENBQUM7QUFDSCxDQUFDO0FBcEZEO0lBQUMsVUFBVSxFQUFFOztpQkFBQTtBQW9GWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcGlsZVR5cGVNZXRhZGF0YSwgQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGF9IGZyb20gJy4vZGlyZWN0aXZlX21ldGFkYXRhJztcbmltcG9ydCB7U291cmNlTW9kdWxlLCBTb3VyY2VFeHByZXNzaW9uLCBtb2R1bGVSZWZ9IGZyb20gJy4vc291cmNlX21vZHVsZSc7XG5pbXBvcnQge1ZpZXdFbmNhcHN1bGF0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvY29yZS9tZXRhZGF0YS92aWV3JztcbmltcG9ydCB7WEhSfSBmcm9tICdhbmd1bGFyMi9zcmMvY29tcGlsZXIveGhyJztcbmltcG9ydCB7SVNfREFSVCwgU3RyaW5nV3JhcHBlciwgaXNCbGFua30gZnJvbSAnYW5ndWxhcjIvc3JjL2ZhY2FkZS9sYW5nJztcbmltcG9ydCB7UHJvbWlzZVdyYXBwZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvYXN5bmMnO1xuaW1wb3J0IHtTaGFkb3dDc3N9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci9zaGFkb3dfY3NzJztcbmltcG9ydCB7VXJsUmVzb2x2ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb21waWxlci91cmxfcmVzb2x2ZXInO1xuaW1wb3J0IHtleHRyYWN0U3R5bGVVcmxzfSBmcm9tICcuL3N0eWxlX3VybF9yZXNvbHZlcic7XG5pbXBvcnQge1xuICBlc2NhcGVTaW5nbGVRdW90ZVN0cmluZyxcbiAgY29kZUdlbkV4cG9ydFZhcmlhYmxlLFxuICBjb2RlR2VuVG9TdHJpbmcsXG4gIE1PRFVMRV9TVUZGSVhcbn0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnYW5ndWxhcjIvc3JjL2NvcmUvZGknO1xuXG5jb25zdCBDT01QT05FTlRfVkFSSUFCTEUgPSAnJUNPTVAlJztcbmNvbnN0IEhPU1RfQVRUUiA9IGBfbmdob3N0LSR7Q09NUE9ORU5UX1ZBUklBQkxFfWA7XG5jb25zdCBDT05URU5UX0FUVFIgPSBgX25nY29udGVudC0ke0NPTVBPTkVOVF9WQVJJQUJMRX1gO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3R5bGVDb21waWxlciB7XG4gIHByaXZhdGUgX3N0eWxlQ2FjaGU6IE1hcDxzdHJpbmcsIFByb21pc2U8c3RyaW5nW10+PiA9IG5ldyBNYXA8c3RyaW5nLCBQcm9taXNlPHN0cmluZ1tdPj4oKTtcbiAgcHJpdmF0ZSBfc2hhZG93Q3NzOiBTaGFkb3dDc3MgPSBuZXcgU2hhZG93Q3NzKCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfeGhyOiBYSFIsIHByaXZhdGUgX3VybFJlc29sdmVyOiBVcmxSZXNvbHZlcikge31cblxuICBjb21waWxlQ29tcG9uZW50UnVudGltZSh0ZW1wbGF0ZTogQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGEpOiBQcm9taXNlPEFycmF5PHN0cmluZyB8IGFueVtdPj4ge1xuICAgIHZhciBzdHlsZXMgPSB0ZW1wbGF0ZS5zdHlsZXM7XG4gICAgdmFyIHN0eWxlQWJzVXJscyA9IHRlbXBsYXRlLnN0eWxlVXJscztcbiAgICByZXR1cm4gdGhpcy5fbG9hZFN0eWxlcyhzdHlsZXMsIHN0eWxlQWJzVXJscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZS5lbmNhcHN1bGF0aW9uID09PSBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZCk7XG4gIH1cblxuICBjb21waWxlQ29tcG9uZW50Q29kZUdlbih0ZW1wbGF0ZTogQ29tcGlsZVRlbXBsYXRlTWV0YWRhdGEpOiBTb3VyY2VFeHByZXNzaW9uIHtcbiAgICB2YXIgc2hpbSA9IHRlbXBsYXRlLmVuY2Fwc3VsYXRpb24gPT09IFZpZXdFbmNhcHN1bGF0aW9uLkVtdWxhdGVkO1xuICAgIHJldHVybiB0aGlzLl9zdHlsZUNvZGVHZW4odGVtcGxhdGUuc3R5bGVzLCB0ZW1wbGF0ZS5zdHlsZVVybHMsIHNoaW0pO1xuICB9XG5cbiAgY29tcGlsZVN0eWxlc2hlZXRDb2RlR2VuKHN0eWxlc2hlZXRVcmw6IHN0cmluZywgY3NzVGV4dDogc3RyaW5nKTogU291cmNlTW9kdWxlW10ge1xuICAgIHZhciBzdHlsZVdpdGhJbXBvcnRzID0gZXh0cmFjdFN0eWxlVXJscyh0aGlzLl91cmxSZXNvbHZlciwgc3R5bGVzaGVldFVybCwgY3NzVGV4dCk7XG4gICAgcmV0dXJuIFtcbiAgICAgIHRoaXMuX3N0eWxlTW9kdWxlKFxuICAgICAgICAgIHN0eWxlc2hlZXRVcmwsIGZhbHNlLFxuICAgICAgICAgIHRoaXMuX3N0eWxlQ29kZUdlbihbc3R5bGVXaXRoSW1wb3J0cy5zdHlsZV0sIHN0eWxlV2l0aEltcG9ydHMuc3R5bGVVcmxzLCBmYWxzZSkpLFxuICAgICAgdGhpcy5fc3R5bGVNb2R1bGUoc3R5bGVzaGVldFVybCwgdHJ1ZSwgdGhpcy5fc3R5bGVDb2RlR2VuKFtzdHlsZVdpdGhJbXBvcnRzLnN0eWxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZVdpdGhJbXBvcnRzLnN0eWxlVXJscywgdHJ1ZSkpXG4gICAgXTtcbiAgfVxuXG4gIGNsZWFyQ2FjaGUoKSB7IHRoaXMuX3N0eWxlQ2FjaGUuY2xlYXIoKTsgfVxuXG4gIHByaXZhdGUgX2xvYWRTdHlsZXMocGxhaW5TdHlsZXM6IHN0cmluZ1tdLCBhYnNVcmxzOiBzdHJpbmdbXSxcbiAgICAgICAgICAgICAgICAgICAgICBlbmNhcHN1bGF0ZTogYm9vbGVhbik6IFByb21pc2U8QXJyYXk8c3RyaW5nIHwgYW55W10+PiB7XG4gICAgdmFyIHByb21pc2VzOiBQcm9taXNlPHN0cmluZ1tdPltdID0gYWJzVXJscy5tYXAoKGFic1VybDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmdbXT4gPT4ge1xuICAgICAgdmFyIGNhY2hlS2V5ID0gYCR7YWJzVXJsfSR7ZW5jYXBzdWxhdGUgPyAnLnNoaW0nIDogJyd9YDtcbiAgICAgIHZhciByZXN1bHQ6IFByb21pc2U8c3RyaW5nW10+ID0gdGhpcy5fc3R5bGVDYWNoZS5nZXQoY2FjaGVLZXkpO1xuICAgICAgaWYgKGlzQmxhbmsocmVzdWx0KSkge1xuICAgICAgICByZXN1bHQgPSB0aGlzLl94aHIuZ2V0KGFic1VybCkudGhlbigoc3R5bGUpID0+IHtcbiAgICAgICAgICB2YXIgc3R5bGVXaXRoSW1wb3J0cyA9IGV4dHJhY3RTdHlsZVVybHModGhpcy5fdXJsUmVzb2x2ZXIsIGFic1VybCwgc3R5bGUpO1xuICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkU3R5bGVzKFtzdHlsZVdpdGhJbXBvcnRzLnN0eWxlXSwgc3R5bGVXaXRoSW1wb3J0cy5zdHlsZVVybHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5jYXBzdWxhdGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fc3R5bGVDYWNoZS5zZXQoY2FjaGVLZXksIHJlc3VsdCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlV3JhcHBlci5hbGw8c3RyaW5nW10+KHByb21pc2VzKS50aGVuKChuZXN0ZWRTdHlsZXM6IHN0cmluZ1tdW10pID0+IHtcbiAgICAgIHZhciByZXN1bHQ6IEFycmF5PHN0cmluZyB8IGFueVtdPiA9XG4gICAgICAgICAgcGxhaW5TdHlsZXMubWFwKHBsYWluU3R5bGUgPT4gdGhpcy5fc2hpbUlmTmVlZGVkKHBsYWluU3R5bGUsIGVuY2Fwc3VsYXRlKSk7XG4gICAgICBuZXN0ZWRTdHlsZXMuZm9yRWFjaChzdHlsZXMgPT4gcmVzdWx0LnB1c2goc3R5bGVzKSk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3R5bGVDb2RlR2VuKHBsYWluU3R5bGVzOiBzdHJpbmdbXSwgYWJzVXJsczogc3RyaW5nW10sIHNoaW06IGJvb2xlYW4pOiBTb3VyY2VFeHByZXNzaW9uIHtcbiAgICB2YXIgYXJyYXlQcmVmaXggPSBJU19EQVJUID8gYGNvbnN0YCA6ICcnO1xuICAgIHZhciBzdHlsZUV4cHJlc3Npb25zID0gcGxhaW5TdHlsZXMubWFwKFxuICAgICAgICBwbGFpblN0eWxlID0+IGVzY2FwZVNpbmdsZVF1b3RlU3RyaW5nKHRoaXMuX3NoaW1JZk5lZWRlZChwbGFpblN0eWxlLCBzaGltKSkpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhYnNVcmxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgbW9kdWxlVXJsID0gdGhpcy5fY3JlYXRlTW9kdWxlVXJsKGFic1VybHNbaV0sIHNoaW0pO1xuICAgICAgc3R5bGVFeHByZXNzaW9ucy5wdXNoKGAke21vZHVsZVJlZihtb2R1bGVVcmwpfVNUWUxFU2ApO1xuICAgIH1cbiAgICB2YXIgZXhwcmVzc2lvblNvdXJjZSA9IGAke2FycmF5UHJlZml4fSBbJHtzdHlsZUV4cHJlc3Npb25zLmpvaW4oJywnKX1dYDtcbiAgICByZXR1cm4gbmV3IFNvdXJjZUV4cHJlc3Npb24oW10sIGV4cHJlc3Npb25Tb3VyY2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3R5bGVNb2R1bGUoc3R5bGVzaGVldFVybDogc3RyaW5nLCBzaGltOiBib29sZWFuLFxuICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBTb3VyY2VFeHByZXNzaW9uKTogU291cmNlTW9kdWxlIHtcbiAgICB2YXIgbW9kdWxlU291cmNlID0gYFxuICAgICAgJHtleHByZXNzaW9uLmRlY2xhcmF0aW9ucy5qb2luKCdcXG4nKX1cbiAgICAgICR7Y29kZUdlbkV4cG9ydFZhcmlhYmxlKCdTVFlMRVMnKX0ke2V4cHJlc3Npb24uZXhwcmVzc2lvbn07XG4gICAgYDtcbiAgICByZXR1cm4gbmV3IFNvdXJjZU1vZHVsZSh0aGlzLl9jcmVhdGVNb2R1bGVVcmwoc3R5bGVzaGVldFVybCwgc2hpbSksIG1vZHVsZVNvdXJjZSk7XG4gIH1cblxuICBwcml2YXRlIF9zaGltSWZOZWVkZWQoc3R5bGU6IHN0cmluZywgc2hpbTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNoaW0gPyB0aGlzLl9zaGFkb3dDc3Muc2hpbUNzc1RleHQoc3R5bGUsIENPTlRFTlRfQVRUUiwgSE9TVF9BVFRSKSA6IHN0eWxlO1xuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlTW9kdWxlVXJsKHN0eWxlc2hlZXRVcmw6IHN0cmluZywgc2hpbTogYm9vbGVhbik6IHN0cmluZyB7XG4gICAgcmV0dXJuIHNoaW0gPyBgJHtzdHlsZXNoZWV0VXJsfS5zaGltJHtNT0RVTEVfU1VGRklYfWAgOiBgJHtzdHlsZXNoZWV0VXJsfSR7TU9EVUxFX1NVRkZJWH1gO1xuICB9XG59XG4iXX0=